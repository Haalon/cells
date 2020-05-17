precision mediump float;
uniform sampler2D state;
uniform sampler2D hist;
uniform vec2 screenSize;
uniform vec2 u_offset;
uniform float u_scale;


float get(float fx,float fy){
    vec2 offset=vec2(fx,fy);
    return texture2D(state, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;
}

float get_old(float fx,float fy){
    vec2 offset=vec2(fx,fy);
    return texture2D(hist, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;
}

void main() {   
        
    float col = get(0.0,0.0);   

    float old_col = get_old(0.0,0.0);
    old_col = old_col > 0.7 ? old_col * 0.95 : old_col - 0.01;
    col = max(col, old_col);
    
    gl_FragColor =  vec4(col,col,col,1.0);
}