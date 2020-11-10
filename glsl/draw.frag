precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
// uniform vec2 u_offset;
// uniform float u_scale;

uniform vec2 u_org;
uniform vec2 u_end;
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

float dist(vec2 a, vec2 b) {
    if(u_mode == 0)
        return d_inf(a,b);

    if(u_mode == 1)
        return d_1(a,b);

    return d_2(a,b);
}

float ldist_1(vec2 v, vec2 w, vec2 p) {
    // we wanna solve for t 
    // v + t*(w-v) = (x,_)
    // or
    // v + t*(w-v) = (_,y)
    // Coz shortest path in manhattan is a straight vertical or horizontal line

    vec2 txy = (p - v) / (w - v);

    txy = clamp(txy, vec2(0.0, 0.0), vec2(1.0, 1.0));
    vec2 projection_x = v + txy.x * (w - v);  // Projection falls on the segment
    vec2 projection_y = v + txy.y * (w - v);  // Projection falls on the segment
    return min(dist(p, projection_x), dist(p, projection_y));
}

float ldist_inf(vec2 v, vec2 w, vec2 p) {
    // we wanna solve for t 
    // v + t*(w-v) = p + _ * (1, -1)
    // or
    // v + t*(w-v) = p + _ * (1, -1)
    // Coz shortest path in inf_norm is a straight diagonal line

    float t_pp = (p.x - v.x + v.y - p.y) / (w.x - v.x - w.y + v.y);
    float t_pm = (p.x - v.x - v.y + p.y) / (w.x - v.x + w.y - v.y);

    t_pp = clamp(t_pp, 0.0, 1.0);
    t_pm = clamp(t_pm, 0.0, 1.0);
    vec2 projection_pp = v + t_pp * (w - v);  // Projection falls on the segment
    vec2 projection_pm = v + t_pm * (w - v);  // Projection falls on the segment
    return min(dist(p, projection_pp), dist(p, projection_pm));
}

float ldist_2(vec2 v, vec2 w, vec2 p) {
    // Consider the line extending the segment, parameterized as v + t (w - v).
    // We find projection of point p onto the line. 
    // It falls where t = [(p-v) . (w-v)] / |w-v|^2
    // We clamp t from [0,1] to handle points outside the segment vw.
    float t = clamp(dot(p - v, w - v) / dot(v - w, v - w), 0.0, 1.0);
    vec2 projection = v + t * (w - v);  // Projection falls on the segment
    return dist(p, projection);
}

float line_dist(vec2 v, vec2 w, vec2 p) {
    // Return minimum distance between line segment vw and point p
    float l2 = dot(v - w, v - w);  // i.e. |w-v|^2 -  avoid a sqrt
    if (l2 < 1.0) return dist(p, v);   // v == w case
    
    if(u_mode == 0)
        return ldist_inf(v,w,p);

    if(u_mode == 1)
        return ldist_1(v,w,p);

    return ldist_2(v,w,p);
}

void main(){

    // vec2 curr_pos = floor( / u_scale + u_offset);
    float outval = texture2D(state, gl_FragCoord.xy / screenSize).r;

    if(line_dist(u_org, u_end, gl_FragCoord.xy) <= u_rad + 0.5)
        outval = u_val;

    // if(u_mode == 0 && d_inf(gl_FragCoord.xy, u_pos) <= u_rad)
    //     outval = u_val;
    // else if(u_mode == 1 && d_1(gl_FragCoord.xy, u_pos) <= u_rad)
    //     outval = u_val;
    // else if(u_mode == 2 && d_2(gl_FragCoord.xy, u_pos) <= u_rad + 0.5)
    //     outval = u_val;
    
    
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
