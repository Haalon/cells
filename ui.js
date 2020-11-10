function setOption(selectElement, value) {
    return [...selectElement.options].some((option, index) => {
        if (option.value == value) {
            selectElement.selectedIndex = index;
            return true;
        }
    });
}

function Controller() {
  var canvas = document.querySelector("#glCanvas");

  var ratio = window.devicePixelRatio || 1;
  const w = canvas.width = screen.width * ratio;
  const h = canvas.height = screen.height * ratio;
  console.log(w,h,ratio);

  // (try to) adapt state size to the screen size
  const minDim = Math.min(h, w, h / ratio, w / ratio)
  const power = Math.floor(Math.log2(minDim))

  this.stateW = this.stateH = 2**power;

  var ca = this.ca = new CA(canvas, this.stateW, this.stateH);
  
  this.mousePressed = null;
  this.lastPos = null;
  this.shiftkey = false;

  this.showUI = true;
  this.drawR = 1;

  // drawing shape
  // 0 - square
  // 1 - rhombus
  // 3 - circle
  this.mode = 2;
  this.drawRadiuses = [1,2,3,5,8,13,21,34,55];
  this.stateSizes = [4,5,6,7,8,9,10,11,12].map(elem => 2**elem)
  

  this.density = 0.5;
  this.FPS = 30;

  this.ca.stepCallback = (ca_) => {
    if(this.mousePressed == 1)
      ca_.poke(this.lastPos, !this.shiftkey*1.0, this.drawR, this.mode);
  }


  canvas.addEventListener('mousedown', (event) => {
    this.mousePressed = event.which
    this.shiftkey = event.shiftKey;
    var pos = ca.getMousePos(event);
    this.lastPos = pos;

    // left mbutton
    if(this.mousePressed == 1){
      ca.poke(pos, !event.shiftKey*1.0, this.drawR, this.mode);
      ca.draw();
    }
  });


  window.addEventListener('mouseup', (event) => {
    this.mousePressed = null
  });


  canvas.addEventListener('mousemove', (event) => {
    var pos = ca.getMousePos(event);
    // console.log("mouse", pos)
    this.shiftkey = event.shiftKey;
    if(this.mousePressed == 1) {
      ca.poke2(this.lastPos, pos, !event.shiftKey*1.0, this.drawR, this.mode); 
      ca.draw();
    }
    // right mbutton
    else if(this.mousePressed == 3) {
      ca.shiftBy(this.lastPos[0] - pos[0], this.lastPos[1] - pos[1]);
      ca.draw();
    }
    this.lastPos = pos;
  });

  // prevent RMB menu from showing up
  canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    return false;
  })

  canvas.addEventListener("wheel", event => {
    event.preventDefault();

    const delta = -Math.sign(event.deltaY);
    var scaleMult = 1.0;
    if (delta > 0 && ca.scale < 64)
      scaleMult = 2;

    if (delta < 0 && ca.scale > 0.125)
      scaleMult = 0.5;

    if(scaleMult != 1)
    {
      ca.zoomAt(this.lastPos, scaleMult);
      ca.draw();
    }
  });


  document.addEventListener('keydown', (event) =>{
    if(event.which == 27) /* [esc] */ {
      this.showUI = !this.showUI
      var elems = document.getElementsByClassName("ui")
      for(var e of elems)
        e.style.display = this.showUI ? 'block' : 'none';
    }
    // we don't wanna react to other keys in inputs
    if(document.activeElement != document.body && this.showUI) return; 

    switch (event.which) {
      case 38: /* [up] */
        ca.shiftBy(0,1);
        ca.draw();
        break;

      case 40: /* [down] */
        ca.shiftBy(0,-1);
        ca.draw();
        break;

      case 37: /* [left] */
        ca.shiftBy(-1,0);
        ca.draw();
        break;        

      case 39: /* [right] */
        ca.shiftBy(1,0);
        ca.draw();
        break;

      case 32: /* [space] */
        ca.switch()
        break;

      case 13: /* [enter] */
        ca.stop();
        ca.step();
        ca.draw(true);
        break;

      case 8: /* [backspace] */
        ca.setRandom(this.density);
        ca.draw();
        break;

      case 46: /* [del] */
        ca.setRandom(0);
        ca.draw();
        break;

      case 72: /* [h] */
        ca.hist = !ca.hist;
        ca.draw();
        break;

      case 76: /* [l] */
        console.log(this.ca);
        break;

      case 67: /* [c] */
        this.mode=2;
        break;

      case 83: /* [s] */
        this.mode=0;
        break;

      case 82: /* [r] */
        this.mode=1;
        break;

      case 9: /* [Tab] */
        this.downloadImage();
        break;

      default:
        if(event.which >= 49 && event.which <= 57) /* [1][2] ... [9] */
          this.drawR = this.drawRadiuses.valueOf()[event.which - 49];
  }});

  this.lastCounter = 0;
  setInterval(() => {    
    console.log(ca.counter-this.lastCounter, ' frames last second');
    this.lastCounter = ca.counter;
  }, 1000);

  this.denseLabel = document.getElementById('denseLabel');
  this.denseRange = document.getElementById('denseRange');
  this.denseRange.addEventListener("input", e => this.setDensity(e.target.value));

  this.FPSLabel = document.getElementById('FPSLabel');
  this.FPSRange = document.getElementById('FPSRange');
  this.FPSRange.addEventListener("input", e => this.setFPS(e.target.value));

  this.ruleText = document.getElementById('ruleText');
  this.ruleText.value = ca.rule
  
  this.resetCheckbox = document.getElementById('resetCheckbox');

  this.compileButton = document.getElementById('compileButton');
  this.compileButton.addEventListener('click', (e) => this.setRule());

  this.ruleSelect = document.getElementById('ruleSelect');
  this.ruleSelect.addEventListener('change', (e) => this.selectRule());
  // rules are defined in 'rules.js'
  for(var i in rules) {
    var c = document.createElement("option");
    c.text = rules[i].name;
    this.ruleSelect.options.add(c, -1); 
  }

  this.heightSelect = document.getElementById('heightSelect');
  this.widthSelect = document.getElementById('widthSelect');
  for(var s of this.stateSizes) {
    var ch = document.createElement("option");
    var cw = document.createElement("option");
    ch.text = cw.text = s.toString();
    this.heightSelect.options.add(ch, -1);
    this.widthSelect.options.add(cw, -1);
  }
  this.widthSelect.addEventListener('change', 
    (e) => this.setStateSize(e.target.value, null));
  this.heightSelect.addEventListener('change', 
    (e) => this.setStateSize(null, e.target.value));
  
  setOption(this.heightSelect, this.stateH);
  setOption(this.widthSelect, this.stateW);

  // use the first rule in rules.js
  this.setDensity(rules[0].r);
  this.setFPS(this.FPS);
  // Start the damn thing!
  this.ca.run()  
}

Controller.prototype.setStateSize = function(w, h) {
  w = w || this.ca.statesize[0];
  h = h || this.ca.statesize[1];

  this.ca.setStateSize(w,h);
  this.ca.setRandom(this.density);
  this.ca.draw();
}

Controller.prototype.setRule = function(src) {
  src = src || this.ruleText.value;
  this.ca.setRule(src);
  this.ruleText.value = this.ca.rule;

  // reset the field if auto-reset is on
  if(this.resetCheckbox.checked) {
    this.ca.setRandom(this.density);
    this.ca.draw();
  }
}


Controller.prototype.selectRule = function() {
  var i = this.ruleSelect.options.selectedIndex
  this.setDensity(rules[i].r)
  this.setRule(rules[i].path)
}


Controller.prototype.setDensity = function(val) {
  this.density = val
  this.denseRange.value = val;  
  this.denseLabel.innerHTML = val.toString()
}


Controller.prototype.setFPS = function(val) {
  this.FPS = val
  this.FPSRange.value = val;  
  this.FPSLabel.innerHTML = val.toString()
  this.ca.switch();
  this.ca.interval = 1000 / val;
  this.ca.switch();
}

Controller.prototype.downloadImage = function() {
  var zerStr = this.ca.counter.toString();
  var img = this.ca.getImage()

  var link = document.createElement("a");
  link.href = img.src;
  link.download = "image" + zerStr + ".png";
  link.style.display = "none";
  var evt = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": true
  });

  document.body.appendChild(link);
  link.dispatchEvent(evt);
  document.body.removeChild(link);
}

function main() {
  // console.log(ca)
  document.ctrl = new Controller();
  
}


if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
