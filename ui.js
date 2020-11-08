function Controller(ca) {  
  var canvas = ca.canvas
  this.ca = ca;
  
  this.mousePressed = null;
  this.lastPos = null;
  this.showUI = true;
  this.drawR = 1;

  // drawing shape
  // 0 - square
  // 1 - rhombus
  // 3 - circle
  this.mode = 2;
  this.drawRadiuses = [1,2,3,5,8,13,21,34,55];
  

  this.density = 0.5;


  canvas.addEventListener('mousedown', (event) => {
    this.mousePressed = event.which
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
    if(this.mousePressed == 1) {
      var diag_dist = Math.max(Math.abs(pos[0]-this.lastPos[0]), Math.abs(pos[1]-this.lastPos[1]))
      // bigger radius ==> bigger steps
      // also if we are zoom in (small scale) steps should be smaller
      for (var step = 0; step <= diag_dist; step += this.drawR * ca.scale) {
        var t = diag_dist == 0? 0.0 : step / diag_dist;
        var point = [
          this.lastPos[0] + t * (pos[0] - this.lastPos[0]),
          this.lastPos[1] + t * (pos[1] - this.lastPos[1]),
        ]
        ca.poke(point, !event.shiftKey*1.0, this.drawR, this.mode);
      }  
      ca.draw();
    }
    // right mbutton
    else if(this.mousePressed == 3) {
      var oldStatePos = ca.getStatePos(this.lastPos)
      var newStatePos = ca.getStatePos(pos)

      ca.offset[0] += oldStatePos[0] - newStatePos[0]
      ca.offset[1] += oldStatePos[1] - newStatePos[1]

      ca.draw();
    }
    this.lastPos = pos;
  });

  // prevent RMB menu from showon up
  canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    return false;
  })


  canvas.addEventListener("wheel", event => {

    // prevent blurry page zoom with ctrl + mwheel
    if(event.ctrlKey)
      event.preventDefault()

    const delta = -Math.sign(event.deltaY);
    var scaleMult = 1.0;
    if (delta > 0 && ca.scale < 64)
      scaleMult = 2;

    if (delta < 0 && ca.scale > 0.125)
      scaleMult = 0.5;

    var oldStatePos = ca.getStatePos(this.lastPos)
    ca.scale *= scaleMult;
    var newStatePos = ca.getStatePos(this.lastPos)

    // offset so the zoom's origin matches the mouse location
    ca.offset[0] += oldStatePos[0] - newStatePos[0]
    ca.offset[1] += oldStatePos[1] - newStatePos[1]

    ca.draw();
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
        ca.offset[1] += 1;
        ca.draw();
        break;

      case 40: /* [down] */
        ca.offset[1] -= 1;
        ca.draw();
        break;

      case 37: /* [left] */
        ca.offset[0] -= 1;
        ca.draw();
        break;        

      case 39: /* [right] */
        ca.offset[0] += 1;
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
  this.denseRange.addEventListener("input", e => this.setDensity());  

  this.ruleText = document.getElementById('ruleText');
  this.ruleText.value = ca.rule
  this.ruleSelect = document.getElementById('ruleSelect');
  this.ruleSelect.addEventListener('change', (e) => this.selectRule());
  this.resetCheckbox = document.getElementById('resetCheckbox');

  this.compileButton = document.getElementById('compileButton');
  this.compileButton.addEventListener('click', (e) => this.setRule());

  // rules are defined in 'rules.js'
  for(var i in rules) {
    var c = document.createElement("option");
    c.text = rules[i].name;
    this.ruleSelect.options.add(c, -1); 
  }

  // use the first rule in rules.js
  this.setDensity(rules[0].r);
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
  this.density = val || this.denseRange.value;
  if(val)  this.denseRange.value = val;
  
  this.denseLabel.innerHTML = this.density.toString()
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
  var canvas = document.querySelector("#glCanvas");  
  var ca = new CA(canvas, 1)
  // console.log(ca)
  document.ctrl = new Controller(ca);
  ca.run()  
}


if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
