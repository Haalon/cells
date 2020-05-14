var vShow = `
  attribute vec4 a_position;

  void main() {
   
    gl_Position = a_position;
  }`;



var fStep = `
  precision mediump float;
  
  uniform float u_time;
  uniform sampler2D u_texture;

  void main() {
    // gl_FragColor = texture2D(u_texture, gl_FragCoord);
    gl_FragColor = vec4(((gl_FragCoord.x-512.0)/512.0*cos(u_time)+1.0)/2.0, ((gl_FragCoord.y-256.0)/256.0*sin(u_time)+1.0)/2.0, (1.0 + sin(u_time))/2.0, 1);
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
  this.scale = 1;
  this.viewsize = new Float32Array([w, h]);
  this.statesize = new Float32Array([w / scale, h / scale]);

  this.buffer = igloo.array(Igloo.QUAD2)

  this.program_step = igloo.program(vShow, fStep);

  this.state_old = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.state_new = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);

  this.frameBuffer = igloo.framebuffer();

  this.startTime = Date.now()

}

CA.prototype.step = function() {
  var gl = this.igloo.gl;
  this.program_step.use()
    .attrib('a_position', this.buffer, 2)
    .uniform('u_time', (Date.now() - this.startTime) / 1000.0)
    .draw(gl.TRIANGLE_STRIP, 4);
  return this
}

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

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function main() {
  var canvas = document.querySelector("#glCanvas");
  canvas.addEventListener('mousemove', (event) => {
    console.log(getMousePos(canvas,event))});
  
  // Initialize the GL context
  var ca = new CA(canvas, 1)
  console.log(ca)
  setInterval(() => ca.step(), 50);
}

window.onload = main;