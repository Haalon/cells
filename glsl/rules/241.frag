precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
float cv(float fx,float fy){
    vec2 v=vec2(fx,fy);
    float o=texture2D(state,(gl_FragCoord.xy+v)/screenSize).r;
    if(o>0.0){
        return 1.0;
    }else{
        return 0.0;
    }
}
void main(){
    float outval=cv(0.0,0.0);
    float nhd0=cv(-1.0,-1.0)+cv(1.0,-1.0)+cv(-1.0,0.0)+cv(1.0,0.0);
    float fin_0=nhd0;
    if(fin_0>=2.0&&fin_0<=4.0){
        outval=1.0;
    }
    if(fin_0==2.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
