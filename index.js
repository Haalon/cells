const url = window.location.href;
var src = {
  vCopy: 'glsl/copy.vert',
  fCopy: 'glsl/copy.frag',
  fHist: 'glsl/hist.frag',
  fRule: 'glsl/rule.frag',
}

for(var key in src)
  src[key] = url + src[key];

// modulus, such that (-1) mod 10 == 9
function mod(n, m) {
  return ((n % m) + m) % m;
}


function CA(canvas, scale) {
  this.canvas = canvas;
  var igloo = this.igloo = new Igloo(canvas);
  var gl = igloo.gl;

  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  const w = canvas.width = screen.width;
  const h = canvas.height = screen.height;
  
  this.scale = scale;
  this.viewsize = new Float32Array([w, h]);
  console.log(w,h);
  console.log(canvas.width, canvas.height);

  // (try to) adapt state size to the screen size
  const minDim = Math.min(h, w, h * window.devicePixelRatio, w * window.devicePixelRatio)
  const power = Math.floor(Math.log2(minDim))
  this.statesize = new Float32Array([2**power, 2**power]);

  // assuming lowRes => low comp. power
  this.interval = power >= 10 ? 10 : 25;

  this.scale = 2;  

  this.offset = new Float32Array([0, 0]);

  gl.disable(gl.DEPTH_TEST);

  this.buffer = igloo.array(Igloo.QUAD2)

  this.program_copy = igloo.program(src.vCopy, src.fCopy);
  this.program_hist = igloo.program(src.vCopy, src.fHist);
  this.program_rule = igloo.program(src.vCopy, src.fRule);

  this.hist = false;

  this.tex_temp = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.tex_curr = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.tex_hist = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);

  this.frameBuffer = igloo.framebuffer();

  this.counter = 0;

  this.setRandom();
}

CA.prototype.run = function() {
  if(!this.timer) {
    this.timer = setInterval(() => {
      this.step();
      this.draw(true);
    }, this.interval);
  }
}

CA.prototype.stop = function() {
  clearInterval(this.timer);
  this.timer = null;
}

CA.prototype.switch = function() {
  if(this.timer)
    this.stop()
  else
    this.run()
}

CA.prototype.swap = function() {
  var tmp = this.tex_curr;
  this.tex_curr = this.tex_temp
  this.tex_temp = tmp;
  return this;
};


CA.prototype.step = function() {
  var gl = this.igloo.gl;
  this.frameBuffer.attach(this.tex_temp);
  this.tex_curr.bind(0);
  gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
  this.program_rule.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    .uniform('screenSize', this.statesize)
    .draw(gl.TRIANGLE_STRIP, 4);
  this.swap();
  this.counter += 1;
  return this
}

CA.prototype.draw = function(afterStep) {
  var gl = this.igloo.gl;

  //
  if(this.hist && afterStep) {
    this.frameBuffer.attach(this.tex_temp);
    this.tex_curr.bind(0);
    this.tex_hist.bind(1);
    gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
    this.program_hist.use()
      .attrib('a_position', this.buffer, 2)
      .uniformi('state', 0)
      .uniformi('hist', 1)
      .uniform('u_scale', 1.0)
      .uniform('u_offset', new Float32Array([0, 0]))
      .uniform('screenSize', this.statesize)
      .draw(gl.TRIANGLE_STRIP, 4);
    this.tex_hist.copy(0, 0, this.statesize[0], this.statesize[1])
  }


  this.igloo.defaultFramebuffer.bind();
  if(this.hist)
    this.tex_hist.bind(0);  
  else
    this.tex_curr.bind(0);
    
  gl.viewport(0, 0, this.viewsize[0], this.viewsize[1]);
  this.program_copy.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    .uniform('u_scale', this.scale)
    .uniform('u_offset', this.offset)
    .uniform('screenSize', this.statesize)
    .draw(gl.TRIANGLE_STRIP, 4);
  this.lastTime = Date.now();
  return this;
};


CA.prototype.set = function(state) {
  var gl = this.igloo.gl;
  var rgba = new Uint8Array(this.statesize[0] * this.statesize[1] * 4);
  for (var i = 0; i < state.length; i++) {
    var ii = i * 4;
    rgba[ii + 0] = rgba[ii + 1] = rgba[ii + 2] = state[i] ? 255 : 0;
    rgba[ii + 3] = 255;
  }
  this.tex_curr.subset(rgba, 0, 0, this.statesize[0], this.statesize[1]);
  this.tex_hist.subset(rgba, 0, 0, this.statesize[0], this.statesize[1]);
  return this
};

CA.prototype.setRandom = function(p) {
  var gl = this.igloo.gl, size = this.statesize[0] * this.statesize[1];
  p = p == null ? 0.53 : p;
  console.log(p);
  var rand = new Uint8Array(size);
  for (var i = 0; i < size; i++) {
    rand[i] = Math.random() < p ? 1 : 0;
  }
  this.set(rand);
  return this;
};

CA.prototype.pokeSqr = function(x, y, state, r) {
  r = r || 1

  // shift so the mouse will be at the center of a drawn sqare
  x = mod(x / this.scale + this.offset[0] - r + 1, this.statesize[0]);
  y = mod(y / this.scale + this.offset[1] - r + 1, this.statesize[1]);

  x = Math.floor(x)
  y = Math.floor(y)


  this.poke(x, y, state, 2*r - 1, 2*r - 1)
}


CA.prototype.poke = function(x, y, state, w, h) {

  h = h || 1
  w = w || 1

  var ex = x + w - 1;
  var ey = y + h - 1;

  if(ex >= this.statesize[0]) { // wrap around x
    this.poke(0, y, state, ex - this.statesize[0] + 1, h)
    w = this.statesize[0] - x;
  }

  if(ey >= this.statesize[1]) { // wrap around y
    this.poke(x, 0, state, w, ey - this.statesize[1] + 1)
    h = this.statesize[1] - y;
  }

  if(w*h <= 0)
    return 

  var gl = this.igloo.gl,
  v = state * 255;
  var arr = new Array(w*h).fill([v, v, v, 255]).flat();
  this.tex_curr.subset(arr, x, y, w, h);
  if(this.hist)
    this.tex_hist.subset(arr, x, y, w, h);
  return this;
};

CA.prototype.getMousePos = function(event) {
  var rect = this.canvas.getBoundingClientRect();
  return [
    (event.pageX - rect.left) ,
    (this.canvas.height - (event.pageY - rect.top)) ,
  ];
};

// offsetless(!)
CA.prototype.getStatePos = function(pos) {
  return [
    mod(pos[0] / this.scale, this.statesize[0]),
    mod(pos[1] / this.scale, this.statesize[1]),
  ]
}


function Controller(ca) {  
  var canvas = ca.canvas
  this.mousePressed = null;
  this.lastPos = null;
  this.help = true;
  this.drawR = 1;


  canvas.addEventListener('mousedown', (event) => {
    this.mousePressed = event.which
    var pos = ca.getMousePos(event);
    this.lastPos = pos;

    // left mbutton
    if(this.mousePressed == 1){
      ca.pokeSqr(pos[0], pos[1], !event.shiftKey, this.drawR);
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
        ca.pokeSqr(point[0], point[1], !event.shiftKey, this.drawR);
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
    switch (event.which) {
      case 27: /* [esc] */
        this.help = !this.help
        document.getElementById('helpBox').style.visibility = this.help ? 'visible' : 'hidden';
        break;

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
        ca.setRandom();
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

      default:
        if(event.which >= 49 && event.which <= 57) /* [1][2] ... [9] */
          this.drawR = [1,2,3,5,8,13,21,34,55].valueOf()[event.which - 49];
  }});


  setInterval(() => {    
    console.log(ca.counter, ' frames last second');
    ca.counter = 0;
  }, 1000);
}



function main() {
  var canvas = document.querySelector("#glCanvas");  
  var ca = new CA(canvas, 1)
  console.log(ca)
  var ctrl = new Controller(ca);
  ca.run()  
}


if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
