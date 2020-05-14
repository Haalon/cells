var vShow = `
attribute vec2 a_position;

void main() {
 
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

var fShow = `
precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
uniform float u_scale;

void main() {
    gl_FragColor = texture2D(state, gl_FragCoord.xy / screenSize / u_scale);
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
        get(vec2(-1.0, -1.0)) +
        get(vec2(-1.0,  0.0)) +
        get(vec2(-1.0,  1.0)) +
        get(vec2( 0.0, -1.0)) +
        get(vec2( 0.0,  1.0)) +
        get(vec2( 1.0, -1.0)) +
        get(vec2( 1.0,  0.0)) +
        get(vec2( 1.0,  1.0));
    if (sum == 3) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    } else if (sum == 2) {
        float current = float(get(vec2(0.0, 0.0)));
        gl_FragColor = vec4(current, current, current, 1.0);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
}`;

// var fStep = `
// precision mediump float;

// uniform sampler2D state;
// uniform vec2 screenSize;

// int get(vec2 offset) {
//     return int(texture2D(state, (gl_FragCoord.xy + offset) / screenSize).r);
// }

// void main() {
//     int sum =
//         get(vec2(-1.0, 0.0)) +
//         get(vec2(-2.0, 0.0)) +
//         get(vec2(-3.0, 0.0)) +
//         get(vec2(1.0, 0.0)) +
//         get(vec2(2.0, 0.0)) +
//         get(vec2(3.0, 0.0)) +
//         get(vec2(0.0, 1.0)) +
//         get(vec2(0.0, 2.0)) +
//         get(vec2(0.0, 3.0)) +
//         get(vec2(0.0, -1.0)) +
//         get(vec2(0.0, -2.0)) +
//         get(vec2(0.0, -3.0));
//     float current = float(get(vec2(0.0, 0.0)));
//     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
//     if (current == 1.0 && (sum > 5 || sum == 3)) {
//         gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);        
//     }

//     if (current == 0.0 && (sum > 7 || sum == 2)) {
//         gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
//     }        
// }`;

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
  console.log(canvas.width, canvas.height);
  this.statesize = new Float32Array([512, 512]);
  this.scale = 4;

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
    .uniform('u_scale', this.scale)
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
  p = p == null ? 0.5 : p;
  var rand = new Uint8Array(size);
  for (var i = 0; i < size; i++) {
    rand[i] = Math.random() < p ? 1 : 0;
  }
  this.set(rand);
  return this;
};

CA.prototype.poke = function(x, y, state) {
  console.log("pre poke ", state," at ", x ,y)
  x = x / this.scale % this.statesize[0]
  y = y / this.scale % this.statesize[1]
  console.log(" post poke ", state," at ", x ,y)
  var gl = this.igloo.gl,
  v = state * 255;
  this.state_new.subset([v, v, v, 255], x, y, 1, 1);
  return this;
};

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return [
    event.pageX - rect.left,
    canvas.height - (event.pageY - rect.top),
  ];
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

var mousePressed = null;
var enabled = true;
var help = true;

function main() {
  var canvas = document.querySelector("#glCanvas");
  // canvas.addEventListener('mousemove', (event) => {
  //   console.log(getMousePos(canvas,event))});


  
  // Initialize the GL context
  var ca = new CA(canvas, 1)
  console.log(ca)
  resizeCanvasToDisplaySize(canvas)

  canvas.addEventListener('mousedown', (event) => {
    mousePressed = event.which
    var pos = getMousePos(canvas, event);
    // console.log("pressed", mousePressed, pos, canvas, event, )
    ca.poke(pos[0], pos[1], mousePressed == 1);
    ca.draw();
  });

  canvas.addEventListener('mouseup', (event) => {
    mousePressed = null
  });

  canvas.addEventListener('mousemove', (event) => {
    if(mousePressed) {
      var pos = getMousePos(canvas, event);
      // console.log("moved to ", pos)
      ca.poke(pos[0], pos[1], mousePressed == 1);
      ca.draw();
    }});

  document.addEventListener('keyup', (event) =>{
    switch (event.which) {
      case 27: /* [esc] */
        help = !help
        document.getElementById('helpBox').style.visibility = help ? 'visible' : 'hidden';
        break;

      case 32: /* [space] */
        enabled = !enabled
        break;

      case 13: /* [enter] */
        enabled = false
        ca.step();
        ca.draw();
        break;

      case 8: /* [backspace] */
        ca.setRandom();
        ca.draw();
        break;

      case 46: /* [del] */
        ca.setRandom(0);
        ca.draw();
        break;
  }});

  setInterval(() => {
    // console.log(`Drawn and calculated ${(Date.now() - ca.lastTime)} mseconds`)
    if(enabled)
    {
      ca.step();
      ca.draw();
    }    
    
  }, 20);
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
