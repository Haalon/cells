precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
// uniform vec2 u_offset;
// uniform float u_scale;

uniform vec2 u_pos;
uniform float u_rad;
uniform float u_val;

uniform int u_mode;


float d_1(vec2 o, vec2 e) {
    vec2 delta = abs(e - o);
    if(delta.x > 0.5 * screenSize.x)
        delta.x = screenSize.x - delta.x;

    if(delta.y > 0.5 * screenSize.y)
        delta.y = screenSize.y - delta.y;

    return delta.x + delta.y;
}


float d_2(vec2 o, vec2 e) {
    vec2 delta = abs(e - o);
    if(delta.x > 0.5 * screenSize.x)
        delta.x = screenSize.x - delta.x;

    if(delta.y > 0.5 * screenSize.y)
        delta.y = screenSize.y - delta.y;

    delta = delta * delta;
    return sqrt(delta.x + delta.y);
}

float d_inf(vec2 o, vec2 e) {
    vec2 delta = abs(e - o);
    if(delta.x > 0.5 * screenSize.x)
        delta.x = screenSize.x - delta.x;

    if(delta.y > 0.5 * screenSize.y)
        delta.y = screenSize.y - delta.y;

    return max(delta.x, delta.y);
}



void main(){

    // vec2 curr_pos = floor( / u_scale + u_offset);
    float outval = texture2D(state, gl_FragCoord.xy / screenSize).r;

    if(u_mode == 0 && d_inf(floor(gl_FragCoord.xy), u_pos) <= u_rad + 0.7)
        outval = u_val;
    else if(u_mode == 1 && d_1(floor(gl_FragCoord.xy), u_pos) <= u_rad + 0.7)
        outval = u_val;
    else if(u_mode == 2 && d_2(floor(gl_FragCoord.xy), u_pos) <= u_rad + 0.7)
        outval = u_val;
    
    
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
