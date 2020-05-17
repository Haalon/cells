precision mediump float;
uniform sampler2D tex0_in;
uniform vec2 tex_size;
float cv(float fx,float fy){
    vec2 v=vec2(fx,fy);
    float o=texture2D(tex0_in,(gl_FragCoord.xy+v)/tex_size).r;
    if(o>0.0){
        return 1.0;
    }else{
        return 0.0;
    }
}
void main(){
    float outval=cv(0.0,0.0);
    float nhd0=cv(-18.0,-1.0)+cv(-18.0,0.0)+cv(-18.0,1.0)+cv(-17.0,-5.0)+cv(-17.0,-4.0)+cv(-17.0,4.0)+cv(-17.0,5.0)+cv(-16.0,-8.0)+cv(-16.0,8.0)+cv(-15.0,-10.0)+cv(-15.0,10.0)+cv(-13.0,-12.0)+cv(-13.0,12.0)+cv(-12.0,-13.0)+cv(-12.0,13.0)+cv(-10.0,-15.0)+cv(-10.0,15.0)+cv(-8.0,-16.0)+cv(-8.0,16.0)+cv(-5.0,-17.0)+cv(-5.0,17.0)+cv(-4.0,-17.0)+cv(-4.0,17.0)+cv(-1.0,-18.0)+cv(-1.0,18.0)+cv(0.0,-18.0)+cv(0.0,18.0)+cv(1.0,-18.0)+cv(1.0,18.0)+cv(4.0,-17.0)+cv(4.0,17.0)+cv(5.0,-17.0)+cv(5.0,17.0)+cv(8.0,-16.0)+cv(8.0,16.0)+cv(10.0,-15.0)+cv(10.0,15.0)+cv(12.0,-13.0)+cv(12.0,13.0)+cv(13.0,-12.0)+cv(13.0,12.0)+cv(15.0,-10.0)+cv(15.0,10.0)+cv(16.0,-8.0)+cv(16.0,8.0)+cv(17.0,-5.0)+cv(17.0,-4.0)+cv(17.0,4.0)+cv(17.0,5.0)+cv(18.0,-1.0)+cv(18.0,0.0)+cv(18.0,1.0);
    float fin_0=nhd0;
    if(fin_0>=24.0&&fin_0<=54.0){
        outval=1.0;
    }
    if(fin_0>=29.0&&fin_0<=51.0){
        outval=0.0;
    }
    if(fin_0>=57.0&&fin_0<=70.0){
        outval=0.0;
    }
    if(fin_0>=88.0&&fin_0<=90.0){
        outval=0.0;
    }
    if(fin_0>=25.0&&fin_0<=38.0){
        outval=0.0;
    }
    if(fin_0>=12.0&&fin_0<=12.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
