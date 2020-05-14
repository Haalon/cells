var vShow = `
attribute vec2 a_position;

void main() {
 
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

var fShow = `
precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
uniform float u_time;

void main() {
    gl_FragColor = texture2D(state, gl_FragCoord.xy / screenSize);
}
`


var fStep = `
precision mediump float;

uniform sampler2D state;
uniform vec2 screenSize;

int get(vec2 offset) {
    return int(texture2D(state, (gl_FragCoord.xy + offset) / screenSize).r);
}

void main() {
    int sum =
        get(vec2(-1.0, 0.0)) +
        get(vec2(-2.0, 0.0)) +
        get(vec2(-3.0, 0.0)) +
        get(vec2(1.0, 0.0)) +
        get(vec2(2.0, 0.0)) +
        get(vec2(3.0, 0.0)) +
        get(vec2(0.0, 1.0)) +
        get(vec2(0.0, 2.0)) +
        get(vec2(0.0, 3.0)) +
        get(vec2(0.0, -1.0)) +
        get(vec2(0.0, -2.0)) +
        get(vec2(0.0, -3.0));
    float current = float(get(vec2(0.0, 0.0)));
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    if (current == 1.0 && (sum > 5 || sum == 3)) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);        
    }

    if (current == 0.0 && (sum > 7 || sum == 2)) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }        
}`;

function CA(canvas, scale) {
  var igloo = this.igloo = new Igloo(canvas);
  var gl = igloo.gl;

    // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  var w = canvas.clientWidth, h = canvas.clientHeight;
  this.scale = scale;
  this.viewsize = new Float32Array([w, h]);
  console.log(w,h);
  this.statesize = new Float32Array([1024, 1024]);

  gl.disable(gl.DEPTH_TEST);

  this.buffer = igloo.array(Igloo.QUAD2)

  this.program_step = igloo.program(vShow, fStep);
  this.program_show = igloo.program(vShow, fShow);

  this.state_old = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.state_new = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);

  this.frameBuffer = igloo.framebuffer();

  this.lastTime = Date.now()

  this.setRandom();
}

CA.prototype.swap = function() {
  var tmp = this.state_new;
  this.state_new = this.state_old
  this.state_old = tmp;
  return this;
};


CA.prototype.step = function() {
  var gl = this.igloo.gl;
  this.frameBuffer.attach(this.state_old);
  this.state_new.bind(0);
  gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
  this.program_step.use()
    .attrib('a_position', this.buffer, 2)
    // .uniform('u_time', (Date.now() - this.startTime) / 1000.0)
    .uniformi('state', 0)
    .uniform('screenSize', this.statesize)
    .draw(gl.TRIANGLE_STRIP, 4);
  this.swap();
  return this
}

CA.prototype.draw = function() {
  var gl = this.igloo.gl;
  this.igloo.defaultFramebuffer.bind();
  this.state_new.bind(0);
  gl.viewport(0, 0, this.viewsize[0], this.viewsize[1]);
  this.program_show.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    // .uniform('u_time', (Date.now() - this.startTime) / 1000.0)
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
  this.state_new.subset(rgba, 0, 0, this.statesize[0], this.statesize[1]);
  return this
};

CA.prototype.setRandom = function(p) {
  var gl = this.igloo.gl, size = this.statesize[0] * this.statesize[1];
  p = p == null ? 0.4 : p;
  var rand = new Uint8Array(size);
  for (var i = 0; i < size; i++) {
    rand[i] = Math.random() < p ? 1 : 0;
  }
  this.set(rand);
  return this;
};

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  const width  = canvas.clientWidth  * multiplier | 0;
  const height = canvas.clientHeight * multiplier | 0;
  if (canvas.width !== width ||  canvas.height !== height) {
    canvas.width  = width;
    canvas.height = height;
    return true;
  }
  return false;
}

function main() {
  var canvas = document.querySelector("#glCanvas");
  // canvas.addEventListener('mousemove', (event) => {
  //   console.log(getMousePos(canvas,event))});
  
  // Initialize the GL context
  var ca = new CA(canvas, 1)
  console.log(ca)
  resizeCanvasToDisplaySize(canvas)
  setInterval(() => {
    // console.log(`Drawn and calculated ${(Date.now() - ca.lastTime)} mseconds`)
    ca.step(); 
    ca.draw();

    
  }, 10);
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}