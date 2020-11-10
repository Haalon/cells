const url = window.location.href;
var src = {
  vCopy: 'glsl/copy.vert',
  fCopy: 'glsl/copy.frag',
  fHist: 'glsl/hist.frag',
  fDraw: 'glsl/draw.frag',
}

// {!} use first rule from rules.js
src.fRule = rules[0].path; 

//server path to url
function getFileUrl(path) {
  return window.location.href + path;
}

// modulus, such that (-1) mod 10 == 9
function mod(n, m) {
  return ((n % m) + m) % m;
}

for(var key in src)
  src[key] = getFileUrl(src[key]);

function CA(canvas, w, h) {
  this.canvas = canvas;
  var igloo = this.igloo = new Igloo(canvas);
  var gl = igloo.gl;

  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

    // we want to have entire rule src 
  this.rule = Igloo.fetch(src.fRule)

  this.program_copy = igloo.program(src.vCopy, src.fCopy);
  this.program_hist = igloo.program(src.vCopy, src.fHist);
  this.program_rule = igloo.program(src.vCopy, this.rule);
  this.program_draw = igloo.program(src.vCopy, src.fDraw);
  
  this.scale = 1;
  

  this.interval = 20;

  this.scale = 2;  

  this.offset = new Float32Array([0, 0]);

  gl.disable(gl.DEPTH_TEST);

  this.buffer = igloo.array(Igloo.QUAD2)

  this.hist = true;

  this.stepCallback = null;

  this.viewsize = new Float32Array([canvas.width, canvas.height]);
  
  this.setStateSize(w, h)

  this.frameBuffer = igloo.framebuffer();

  this.counter = 0;
  this.draw_time = Date.now();
  // {!} use first rule from rules.js again
  this.setRandom(rules[0].r);
}

CA.prototype.setStateSize = function(w, h) {
  this.stop();
  
  var gl = this.igloo.gl;
  this.statesize = new Float32Array([w, h]);

  this.tex_temp = this.igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.tex_curr = this.igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.tex_hist = this.igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);

  this.run();
}


CA.prototype.setRule = function(ruleSrc) {
  if(this.timer) {
    this.stop();
    this.setRule_(ruleSrc);
    this.run();
  } else this.setRule_(ruleSrc);
}


CA.prototype.setRule_ = function(ruleSrc) {
  if(Igloo.looksLikeURL(ruleSrc)) ruleSrc = Igloo.fetch(getFileUrl(ruleSrc));
  
  try {
    var prog = this.igloo.program(src.vCopy, ruleSrc);
  } catch (error) {
    alert('compilation error:\n' + error.toString());
    return;
  } 

  this.program_rule = prog;
  this.rule = ruleSrc;
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

  if(this.stepCallback) 
    this.stepCallback(this);

  return this
}

CA.prototype.draw = function(afterStep) {
  // do not draw faster
  // if(Date.now() - this.draw_time < this.interval)
  //   return;

  this.draw_time = Date.now();
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
  p = p == null ? 0.4 : p;
  console.log(p);
  var rand = new Uint8Array(size);
  for (var i = 0; i < size; i++) {
    rand[i] = Math.random() < p ? 1 : 0;
  }
  this.set(rand);
  return this;
};

CA.prototype.getImage = function() {

  var gl = this.igloo.gl
  var texture = this.hist ? this.tex_hist.texture : this.tex_curr.texture;
  var framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

  // Read the contents of the framebuffer
  var data = new Uint8Array(this.statesize[0] * this.statesize[1] * 4);
  gl.readPixels(0, 0, this.statesize[0], this.statesize[1], gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.deleteFramebuffer(framebuffer);

  // Create a 2D canvas to store the result 
  var canvas = document.createElement('canvas');
  canvas.width = this.statesize[0];
  canvas.height = this.statesize[1];
  var context = canvas.getContext('2d');

  // Copy the pixels to a 2D canvas
  var imageData = context.createImageData(this.statesize[0], this.statesize[1]);
  imageData.data.set(data);
  context.putImageData(imageData, 0, 0);

  var img = new Image();
  img.src = canvas.toDataURL("image/png");

  return img;
}

CA.prototype._pokeByShader = function(x, y, val, r, mode) {
  // console.log(origin, end, rad, val)
  
  x = mod(x / this.scale + this.offset[0], this.statesize[0]);
  y = mod(y / this.scale + this.offset[1], this.statesize[1]);

  x = Math.floor(x)
  y = Math.floor(y)

  var gl = this.igloo.gl;
  this.frameBuffer.attach(this.tex_temp);
  this.tex_curr.bind(0);
  gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
  this.program_draw.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    .uniform('screenSize', this.statesize)
    .uniform('u_pos', [x,y])
    .uniform('u_val', val)
    .uniform('u_rad', r-1)
    .uniformi('u_mode', mode)
    .draw(gl.TRIANGLE_STRIP, 4);

  // this.tex_hist.copy(0,0,this.statesize[0], this.statesize[1]) // doesn't seem to work
  this.swap();
  if(this.hist) {
    this.frameBuffer.attach(this.tex_temp);
    this.tex_hist.bind(0);
    gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
    this.program_draw.use()
      .attrib('a_position', this.buffer, 2)
      .uniformi('state', 0)
      .uniform('screenSize', this.statesize)
      .uniform('u_pos', [x,y])
      .uniform('u_val', val)
      .uniform('u_rad', r-1)
      .uniformi('u_mode', mode)
      .draw(gl.TRIANGLE_STRIP, 4);

    var tmp = this.tex_hist;
    this.tex_hist = this.tex_temp
    this.tex_temp = tmp;
  } 
}

CA.prototype.poke = function(pos, val, rad, mode) {
  // _pokeByTexture is fastest with small r, but draws only squares
  // and at such r all modes looks pretty much the same
  // if a square mod, texture-method is faster until r is around 12
  if(rad <= 2 || (mode==0 && rad < 12)) 
    this._pokeByTexture(pos[0], pos[1], val, rad);
  else
    this._pokeByShader(pos[0], pos[1], val, rad, mode);
}

CA.prototype._pokeByTexture = function(x, y, state, r) {
  r = r || 1

  // shift so the mouse will be at the center of a drawn sqare
  x = mod(x / this.scale + this.offset[0] - r + 1, this.statesize[0]);
  y = mod(y / this.scale + this.offset[1] - r + 1, this.statesize[1]);

  x = Math.floor(x)
  y = Math.floor(y)

  this._pokeRectByTexture(x, y, state, 2*r - 1, 2*r - 1)
}


CA.prototype._pokeRectByTexture = function(x, y, state, w, h) {

  h = h || 1
  w = w || 1

  var ex = x + w - 1;
  var ey = y + h - 1;

  if(ex >= this.statesize[0]) { // wrap around x
    this._pokeRectByTexture(0, y, state, ex - this.statesize[0] + 1, h)
    w = this.statesize[0] - x;
  }

  if(ey >= this.statesize[1]) { // wrap around y
    this._pokeRectByTexture(x, 0, state, w, ey - this.statesize[1] + 1)
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

// offsetless and continuous (!)
CA.prototype.getStatePos = function(pos) {
  return [
    mod(pos[0] / this.scale, this.statesize[0]),
    mod(pos[1] / this.scale, this.statesize[1]),
  ]
}

CA.prototype.zoomAt = function(origin, mult) {

  var oldStatePos = this.getStatePos(origin);
  this.scale *= mult;
  var newStatePos = this.getStatePos(origin);

  // offset so the zoom's origin matches the mouse location
  this.offset[0] += oldStatePos[0] - newStatePos[0];
  this.offset[1] += oldStatePos[1] - newStatePos[1];
}

CA.prototype.shiftBy = function(dx, dy) {
  dx = mod(dx / this.scale, this.statesize[0]);
  dy = mod(dy / this.scale, this.statesize[1]);

  this.offset[0] += dx;
  this.offset[1] += dy;
}

CA.prototype.pokeLine = function(org, end, val, rad, mode) {
  var diag_dist = Math.max(Math.abs(org[0]-end[0]), Math.abs(org[1]-end[1]));
  
  // bigger radius ==> bigger steps
  // also if we are zoom in (small scale) steps should be smaller
  for (var step = 0; step <= diag_dist; step += rad * this.scale) {
    var t = diag_dist == 0 ? 0.0 : step / diag_dist;
    var point = [
      org[0] + t * (end[0] - org[0]),
      org[1] + t * (end[1] - org[1]),
    ]
    this.poke(point, val, rad, mode);
  }  
}