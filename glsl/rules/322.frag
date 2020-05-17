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
    float nhd0=cv(-48.0,-6.0)+cv(-48.0,-2.0)+cv(-48.0,2.0)+cv(-48.0,6.0)+cv(-46.0,-12.0)+cv(-46.0,12.0)+cv(-44.0,-18.0)+cv(-44.0,18.0)+cv(-42.0,-24.0)+cv(-42.0,24.0)+cv(-40.0,-5.0)+cv(-40.0,-4.0)+cv(-40.0,-3.0)+cv(-40.0,3.0)+cv(-40.0,4.0)+cv(-40.0,5.0)+cv(-39.0,-8.0)+cv(-39.0,-7.0)+cv(-39.0,-6.0)+cv(-39.0,-5.0)+cv(-39.0,-4.0)+cv(-39.0,-3.0)+cv(-39.0,-2.0)+cv(-39.0,-1.0)+cv(-39.0,1.0)+cv(-39.0,2.0)+cv(-39.0,3.0)+cv(-39.0,4.0)+cv(-39.0,5.0)+cv(-39.0,6.0)+cv(-39.0,7.0)+cv(-39.0,8.0)+cv(-38.0,-8.0)+cv(-38.0,-7.0)+cv(-38.0,-6.0)+cv(-38.0,-5.0)+cv(-38.0,-4.0)+cv(-38.0,-3.0)+cv(-38.0,-2.0)+cv(-38.0,2.0)+cv(-38.0,3.0)+cv(-38.0,4.0)+cv(-38.0,5.0)+cv(-38.0,6.0)+cv(-38.0,7.0)+cv(-38.0,8.0)+cv(-37.0,-8.0)+cv(-37.0,-7.0)+cv(-37.0,-6.0)+cv(-37.0,-5.0)+cv(-37.0,-4.0)+cv(-37.0,-3.0)+cv(-37.0,3.0)+cv(-37.0,4.0)+cv(-37.0,5.0)+cv(-37.0,6.0)+cv(-37.0,7.0)+cv(-37.0,8.0)+cv(-36.0,-30.0)+cv(-36.0,-7.0);
    float nhd1=cv(-36.0,-6.0)+cv(-36.0,-5.0)+cv(-36.0,-4.0)+cv(-36.0,4.0)+cv(-36.0,5.0)+cv(-36.0,6.0)+cv(-36.0,7.0)+cv(-36.0,30.0)+cv(-35.0,-7.0)+cv(-35.0,-6.0)+cv(-35.0,-5.0)+cv(-35.0,-4.0)+cv(-35.0,4.0)+cv(-35.0,5.0)+cv(-35.0,6.0)+cv(-35.0,7.0)+cv(-34.0,-6.0)+cv(-34.0,-5.0)+cv(-34.0,-4.0)+cv(-34.0,4.0)+cv(-34.0,5.0)+cv(-34.0,6.0)+cv(-33.0,-6.0)+cv(-33.0,-5.0)+cv(-33.0,5.0)+cv(-33.0,6.0)+cv(-32.0,-7.0)+cv(-32.0,-6.0)+cv(-32.0,-5.0)+cv(-32.0,-4.0)+cv(-32.0,4.0)+cv(-32.0,5.0)+cv(-32.0,6.0)+cv(-32.0,7.0)+cv(-31.0,-8.0)+cv(-31.0,8.0)+cv(-30.0,-36.0)+cv(-30.0,36.0)+cv(-24.0,-42.0)+cv(-24.0,-3.0)+cv(-24.0,-2.0)+cv(-24.0,-1.0)+cv(-24.0,1.0)+cv(-24.0,2.0)+cv(-24.0,3.0)+cv(-24.0,42.0)+cv(-23.0,-6.0)+cv(-23.0,-5.0)+cv(-23.0,-4.0)+cv(-23.0,-3.0)+cv(-23.0,3.0)+cv(-23.0,4.0)+cv(-23.0,5.0)+cv(-23.0,6.0)+cv(-22.0,-9.0)+cv(-22.0,-8.0)+cv(-22.0,-6.0)+cv(-22.0,-5.0)+cv(-22.0,-4.0)+cv(-22.0,4.0)+cv(-22.0,5.0);
    float nhd2=cv(-22.0,6.0)+cv(-22.0,8.0)+cv(-22.0,9.0)+cv(-21.0,-12.0)+cv(-21.0,-11.0)+cv(-21.0,-10.0)+cv(-21.0,-9.0)+cv(-21.0,9.0)+cv(-21.0,10.0)+cv(-21.0,11.0)+cv(-21.0,12.0)+cv(-20.0,-13.0)+cv(-20.0,-12.0)+cv(-20.0,-11.0)+cv(-20.0,-10.0)+cv(-20.0,10.0)+cv(-20.0,11.0)+cv(-20.0,12.0)+cv(-20.0,13.0)+cv(-19.0,-14.0)+cv(-19.0,-13.0)+cv(-19.0,-12.0)+cv(-19.0,-11.0)+cv(-19.0,-10.0)+cv(-19.0,10.0)+cv(-19.0,11.0)+cv(-19.0,12.0)+cv(-19.0,13.0)+cv(-19.0,14.0)+cv(-18.0,-44.0)+cv(-18.0,-15.0)+cv(-18.0,-14.0)+cv(-18.0,-13.0)+cv(-18.0,-12.0)+cv(-18.0,-11.0)+cv(-18.0,-10.0)+cv(-18.0,10.0)+cv(-18.0,11.0)+cv(-18.0,12.0)+cv(-18.0,13.0)+cv(-18.0,14.0)+cv(-18.0,15.0)+cv(-18.0,44.0)+cv(-17.0,-15.0)+cv(-17.0,-14.0)+cv(-17.0,-13.0)+cv(-17.0,-12.0)+cv(-17.0,-11.0)+cv(-17.0,11.0)+cv(-17.0,12.0)+cv(-17.0,13.0)+cv(-17.0,14.0)+cv(-17.0,15.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,-2.0)+cv(-16.0,2.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-18.0)+cv(-15.0,-17.0);
    float nhd3=cv(-15.0,17.0)+cv(-15.0,18.0)+cv(-14.0,-19.0)+cv(-14.0,-18.0)+cv(-14.0,-17.0)+cv(-14.0,-8.0)+cv(-14.0,8.0)+cv(-14.0,17.0)+cv(-14.0,18.0)+cv(-14.0,19.0)+cv(-13.0,-20.0)+cv(-13.0,-19.0)+cv(-13.0,-18.0)+cv(-13.0,-17.0)+cv(-13.0,17.0)+cv(-13.0,18.0)+cv(-13.0,19.0)+cv(-13.0,20.0)+cv(-12.0,-46.0)+cv(-12.0,-21.0)+cv(-12.0,-20.0)+cv(-12.0,-19.0)+cv(-12.0,-18.0)+cv(-12.0,-17.0)+cv(-12.0,-16.0)+cv(-12.0,16.0)+cv(-12.0,17.0)+cv(-12.0,18.0)+cv(-12.0,19.0)+cv(-12.0,20.0)+cv(-12.0,21.0)+cv(-12.0,46.0)+cv(-11.0,-21.0)+cv(-11.0,-20.0)+cv(-11.0,-19.0)+cv(-11.0,-18.0)+cv(-11.0,-17.0)+cv(-11.0,-16.0)+cv(-11.0,16.0)+cv(-11.0,17.0)+cv(-11.0,18.0)+cv(-11.0,19.0)+cv(-11.0,20.0)+cv(-11.0,21.0)+cv(-10.0,-21.0)+cv(-10.0,-20.0)+cv(-10.0,-19.0)+cv(-10.0,-18.0)+cv(-10.0,18.0)+cv(-10.0,19.0)+cv(-10.0,20.0)+cv(-10.0,21.0)+cv(-9.0,-22.0)+cv(-9.0,-21.0)+cv(-9.0,21.0)+cv(-9.0,22.0)+cv(-8.0,-39.0)+cv(-8.0,-38.0)+cv(-8.0,-37.0)+cv(-8.0,-31.0)+cv(-8.0,-22.0);
    float nhd4=cv(-8.0,-14.0)+cv(-8.0,-5.0)+cv(-8.0,-4.0)+cv(-8.0,-2.0)+cv(-8.0,-1.0)+cv(-8.0,1.0)+cv(-8.0,2.0)+cv(-8.0,4.0)+cv(-8.0,5.0)+cv(-8.0,14.0)+cv(-8.0,22.0)+cv(-8.0,31.0)+cv(-8.0,37.0)+cv(-8.0,38.0)+cv(-8.0,39.0)+cv(-7.0,-39.0)+cv(-7.0,-38.0)+cv(-7.0,-37.0)+cv(-7.0,-36.0)+cv(-7.0,-35.0)+cv(-7.0,-32.0)+cv(-7.0,-5.0)+cv(-7.0,-4.0)+cv(-7.0,4.0)+cv(-7.0,5.0)+cv(-7.0,32.0)+cv(-7.0,35.0)+cv(-7.0,36.0)+cv(-7.0,37.0)+cv(-7.0,38.0)+cv(-7.0,39.0)+cv(-6.0,-48.0)+cv(-6.0,-39.0)+cv(-6.0,-38.0)+cv(-6.0,-37.0)+cv(-6.0,-36.0)+cv(-6.0,-35.0)+cv(-6.0,-34.0)+cv(-6.0,-33.0)+cv(-6.0,-32.0)+cv(-6.0,-23.0)+cv(-6.0,-22.0)+cv(-6.0,22.0)+cv(-6.0,23.0)+cv(-6.0,32.0)+cv(-6.0,33.0)+cv(-6.0,34.0)+cv(-6.0,35.0)+cv(-6.0,36.0)+cv(-6.0,37.0)+cv(-6.0,38.0)+cv(-6.0,39.0)+cv(-6.0,48.0)+cv(-5.0,-40.0)+cv(-5.0,-39.0)+cv(-5.0,-38.0)+cv(-5.0,-37.0)+cv(-5.0,-36.0)+cv(-5.0,-35.0)+cv(-5.0,-34.0)+cv(-5.0,-33.0);
    float nhd5=cv(-5.0,-32.0)+cv(-5.0,-23.0)+cv(-5.0,-22.0)+cv(-5.0,-8.0)+cv(-5.0,-7.0)+cv(-5.0,7.0)+cv(-5.0,8.0)+cv(-5.0,22.0)+cv(-5.0,23.0)+cv(-5.0,32.0)+cv(-5.0,33.0)+cv(-5.0,34.0)+cv(-5.0,35.0)+cv(-5.0,36.0)+cv(-5.0,37.0)+cv(-5.0,38.0)+cv(-5.0,39.0)+cv(-5.0,40.0)+cv(-4.0,-40.0)+cv(-4.0,-39.0)+cv(-4.0,-38.0)+cv(-4.0,-37.0)+cv(-4.0,-36.0)+cv(-4.0,-35.0)+cv(-4.0,-34.0)+cv(-4.0,-32.0)+cv(-4.0,-23.0)+cv(-4.0,-22.0)+cv(-4.0,-8.0)+cv(-4.0,-7.0)+cv(-4.0,7.0)+cv(-4.0,8.0)+cv(-4.0,22.0)+cv(-4.0,23.0)+cv(-4.0,32.0)+cv(-4.0,34.0)+cv(-4.0,35.0)+cv(-4.0,36.0)+cv(-4.0,37.0)+cv(-4.0,38.0)+cv(-4.0,39.0)+cv(-4.0,40.0)+cv(-3.0,-40.0)+cv(-3.0,-39.0)+cv(-3.0,-38.0)+cv(-3.0,-37.0)+cv(-3.0,-24.0)+cv(-3.0,-23.0)+cv(-3.0,23.0)+cv(-3.0,24.0)+cv(-3.0,37.0)+cv(-3.0,38.0)+cv(-3.0,39.0)+cv(-3.0,40.0)+cv(-2.0,-48.0)+cv(-2.0,-39.0)+cv(-2.0,-38.0)+cv(-2.0,-24.0)+cv(-2.0,-16.0)+cv(-2.0,-8.0)+cv(-2.0,8.0);
    float nhd6=cv(-2.0,16.0)+cv(-2.0,24.0)+cv(-2.0,38.0)+cv(-2.0,39.0)+cv(-2.0,48.0)+cv(-1.0,-39.0)+cv(-1.0,-24.0)+cv(-1.0,-8.0)+cv(-1.0,8.0)+cv(-1.0,24.0)+cv(-1.0,39.0)+cv(1.0,-39.0)+cv(1.0,-24.0)+cv(1.0,-8.0)+cv(1.0,8.0)+cv(1.0,24.0)+cv(1.0,39.0)+cv(2.0,-48.0)+cv(2.0,-39.0)+cv(2.0,-38.0)+cv(2.0,-24.0)+cv(2.0,-16.0)+cv(2.0,-8.0)+cv(2.0,8.0)+cv(2.0,16.0)+cv(2.0,24.0)+cv(2.0,38.0)+cv(2.0,39.0)+cv(2.0,48.0)+cv(3.0,-40.0)+cv(3.0,-39.0)+cv(3.0,-38.0)+cv(3.0,-37.0)+cv(3.0,-24.0)+cv(3.0,-23.0)+cv(3.0,23.0)+cv(3.0,24.0)+cv(3.0,37.0)+cv(3.0,38.0)+cv(3.0,39.0)+cv(3.0,40.0)+cv(4.0,-40.0)+cv(4.0,-39.0)+cv(4.0,-38.0)+cv(4.0,-37.0)+cv(4.0,-36.0)+cv(4.0,-35.0)+cv(4.0,-34.0)+cv(4.0,-32.0)+cv(4.0,-23.0)+cv(4.0,-22.0)+cv(4.0,-8.0)+cv(4.0,-7.0)+cv(4.0,7.0)+cv(4.0,8.0)+cv(4.0,22.0)+cv(4.0,23.0)+cv(4.0,32.0)+cv(4.0,34.0)+cv(4.0,35.0)+cv(4.0,36.0);
    float nhd7=cv(4.0,37.0)+cv(4.0,38.0)+cv(4.0,39.0)+cv(4.0,40.0)+cv(5.0,-40.0)+cv(5.0,-39.0)+cv(5.0,-38.0)+cv(5.0,-37.0)+cv(5.0,-36.0)+cv(5.0,-35.0)+cv(5.0,-34.0)+cv(5.0,-33.0)+cv(5.0,-32.0)+cv(5.0,-23.0)+cv(5.0,-22.0)+cv(5.0,-8.0)+cv(5.0,-7.0)+cv(5.0,7.0)+cv(5.0,8.0)+cv(5.0,22.0)+cv(5.0,23.0)+cv(5.0,32.0)+cv(5.0,33.0)+cv(5.0,34.0)+cv(5.0,35.0)+cv(5.0,36.0)+cv(5.0,37.0)+cv(5.0,38.0)+cv(5.0,39.0)+cv(5.0,40.0)+cv(6.0,-48.0)+cv(6.0,-39.0)+cv(6.0,-38.0)+cv(6.0,-37.0)+cv(6.0,-36.0)+cv(6.0,-35.0)+cv(6.0,-34.0)+cv(6.0,-33.0)+cv(6.0,-32.0)+cv(6.0,-23.0)+cv(6.0,-22.0)+cv(6.0,22.0)+cv(6.0,23.0)+cv(6.0,32.0)+cv(6.0,33.0)+cv(6.0,34.0)+cv(6.0,35.0)+cv(6.0,36.0)+cv(6.0,37.0)+cv(6.0,38.0)+cv(6.0,39.0)+cv(6.0,48.0)+cv(7.0,-39.0)+cv(7.0,-38.0)+cv(7.0,-37.0)+cv(7.0,-36.0)+cv(7.0,-35.0)+cv(7.0,-32.0)+cv(7.0,-5.0)+cv(7.0,-4.0)+cv(7.0,4.0);
    float nhd8=cv(7.0,5.0)+cv(7.0,32.0)+cv(7.0,35.0)+cv(7.0,36.0)+cv(7.0,37.0)+cv(7.0,38.0)+cv(7.0,39.0)+cv(8.0,-39.0)+cv(8.0,-38.0)+cv(8.0,-37.0)+cv(8.0,-31.0)+cv(8.0,-22.0)+cv(8.0,-14.0)+cv(8.0,-5.0)+cv(8.0,-4.0)+cv(8.0,-2.0)+cv(8.0,-1.0)+cv(8.0,1.0)+cv(8.0,2.0)+cv(8.0,4.0)+cv(8.0,5.0)+cv(8.0,14.0)+cv(8.0,22.0)+cv(8.0,31.0)+cv(8.0,37.0)+cv(8.0,38.0)+cv(8.0,39.0)+cv(9.0,-22.0)+cv(9.0,-21.0)+cv(9.0,21.0)+cv(9.0,22.0)+cv(10.0,-21.0)+cv(10.0,-20.0)+cv(10.0,-19.0)+cv(10.0,-18.0)+cv(10.0,18.0)+cv(10.0,19.0)+cv(10.0,20.0)+cv(10.0,21.0)+cv(11.0,-21.0)+cv(11.0,-20.0)+cv(11.0,-19.0)+cv(11.0,-18.0)+cv(11.0,-17.0)+cv(11.0,-16.0)+cv(11.0,16.0)+cv(11.0,17.0)+cv(11.0,18.0)+cv(11.0,19.0)+cv(11.0,20.0)+cv(11.0,21.0)+cv(12.0,-46.0)+cv(12.0,-21.0)+cv(12.0,-20.0)+cv(12.0,-19.0)+cv(12.0,-18.0)+cv(12.0,-17.0)+cv(12.0,-16.0)+cv(12.0,16.0)+cv(12.0,17.0)+cv(12.0,18.0);
    float nhd9=cv(12.0,19.0)+cv(12.0,20.0)+cv(12.0,21.0)+cv(12.0,46.0)+cv(13.0,-20.0)+cv(13.0,-19.0)+cv(13.0,-18.0)+cv(13.0,-17.0)+cv(13.0,17.0)+cv(13.0,18.0)+cv(13.0,19.0)+cv(13.0,20.0)+cv(14.0,-19.0)+cv(14.0,-18.0)+cv(14.0,-17.0)+cv(14.0,-8.0)+cv(14.0,8.0)+cv(14.0,17.0)+cv(14.0,18.0)+cv(14.0,19.0)+cv(15.0,-18.0)+cv(15.0,-17.0)+cv(15.0,17.0)+cv(15.0,18.0)+cv(16.0,-12.0)+cv(16.0,-11.0)+cv(16.0,-2.0)+cv(16.0,2.0)+cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-15.0)+cv(17.0,-14.0)+cv(17.0,-13.0)+cv(17.0,-12.0)+cv(17.0,-11.0)+cv(17.0,11.0)+cv(17.0,12.0)+cv(17.0,13.0)+cv(17.0,14.0)+cv(17.0,15.0)+cv(18.0,-44.0)+cv(18.0,-15.0)+cv(18.0,-14.0)+cv(18.0,-13.0)+cv(18.0,-12.0)+cv(18.0,-11.0)+cv(18.0,-10.0)+cv(18.0,10.0)+cv(18.0,11.0)+cv(18.0,12.0)+cv(18.0,13.0)+cv(18.0,14.0)+cv(18.0,15.0)+cv(18.0,44.0)+cv(19.0,-14.0)+cv(19.0,-13.0)+cv(19.0,-12.0)+cv(19.0,-11.0)+cv(19.0,-10.0)+cv(19.0,10.0)+cv(19.0,11.0);
    float nhd10=cv(19.0,12.0)+cv(19.0,13.0)+cv(19.0,14.0)+cv(20.0,-13.0)+cv(20.0,-12.0)+cv(20.0,-11.0)+cv(20.0,-10.0)+cv(20.0,10.0)+cv(20.0,11.0)+cv(20.0,12.0)+cv(20.0,13.0)+cv(21.0,-12.0)+cv(21.0,-11.0)+cv(21.0,-10.0)+cv(21.0,-9.0)+cv(21.0,9.0)+cv(21.0,10.0)+cv(21.0,11.0)+cv(21.0,12.0)+cv(22.0,-9.0)+cv(22.0,-8.0)+cv(22.0,-6.0)+cv(22.0,-5.0)+cv(22.0,-4.0)+cv(22.0,4.0)+cv(22.0,5.0)+cv(22.0,6.0)+cv(22.0,8.0)+cv(22.0,9.0)+cv(23.0,-6.0)+cv(23.0,-5.0)+cv(23.0,-4.0)+cv(23.0,-3.0)+cv(23.0,3.0)+cv(23.0,4.0)+cv(23.0,5.0)+cv(23.0,6.0)+cv(24.0,-42.0)+cv(24.0,-3.0)+cv(24.0,-2.0)+cv(24.0,-1.0)+cv(24.0,1.0)+cv(24.0,2.0)+cv(24.0,3.0)+cv(24.0,42.0)+cv(30.0,-36.0)+cv(30.0,36.0)+cv(31.0,-8.0)+cv(31.0,8.0)+cv(32.0,-7.0)+cv(32.0,-6.0)+cv(32.0,-5.0)+cv(32.0,-4.0)+cv(32.0,4.0)+cv(32.0,5.0)+cv(32.0,6.0)+cv(32.0,7.0)+cv(33.0,-6.0)+cv(33.0,-5.0)+cv(33.0,5.0)+cv(33.0,6.0);
    float nhd11=cv(34.0,-6.0)+cv(34.0,-5.0)+cv(34.0,-4.0)+cv(34.0,4.0)+cv(34.0,5.0)+cv(34.0,6.0)+cv(35.0,-7.0)+cv(35.0,-6.0)+cv(35.0,-5.0)+cv(35.0,-4.0)+cv(35.0,4.0)+cv(35.0,5.0)+cv(35.0,6.0)+cv(35.0,7.0)+cv(36.0,-30.0)+cv(36.0,-7.0)+cv(36.0,-6.0)+cv(36.0,-5.0)+cv(36.0,-4.0)+cv(36.0,4.0)+cv(36.0,5.0)+cv(36.0,6.0)+cv(36.0,7.0)+cv(36.0,30.0)+cv(37.0,-8.0)+cv(37.0,-7.0)+cv(37.0,-6.0)+cv(37.0,-5.0)+cv(37.0,-4.0)+cv(37.0,-3.0)+cv(37.0,3.0)+cv(37.0,4.0)+cv(37.0,5.0)+cv(37.0,6.0)+cv(37.0,7.0)+cv(37.0,8.0)+cv(38.0,-8.0)+cv(38.0,-7.0)+cv(38.0,-6.0)+cv(38.0,-5.0)+cv(38.0,-4.0)+cv(38.0,-3.0)+cv(38.0,-2.0)+cv(38.0,2.0)+cv(38.0,3.0)+cv(38.0,4.0)+cv(38.0,5.0)+cv(38.0,6.0)+cv(38.0,7.0)+cv(38.0,8.0)+cv(39.0,-8.0)+cv(39.0,-7.0)+cv(39.0,-6.0)+cv(39.0,-5.0)+cv(39.0,-4.0)+cv(39.0,-3.0)+cv(39.0,-2.0)+cv(39.0,-1.0)+cv(39.0,1.0)+cv(39.0,2.0)+cv(39.0,3.0);
    float nhd12=cv(39.0,4.0)+cv(39.0,5.0)+cv(39.0,6.0)+cv(39.0,7.0)+cv(39.0,8.0)+cv(40.0,-5.0)+cv(40.0,-4.0)+cv(40.0,-3.0)+cv(40.0,3.0)+cv(40.0,4.0)+cv(40.0,5.0)+cv(42.0,-24.0)+cv(42.0,24.0)+cv(44.0,-18.0)+cv(44.0,18.0)+cv(46.0,-12.0)+cv(46.0,12.0)+cv(48.0,-6.0)+cv(48.0,-2.0)+cv(48.0,2.0)+cv(48.0,6.0);
    float fin_0=nhd0+nhd1+nhd2+nhd3+nhd4+nhd5+nhd6+nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;
    if(fin_0>=74.0){
        outval=0.0;
    }
    if(fin_0==29.0){
        outval=1.0;
    }
    if(fin_0==31.0){
        outval=1.0;
    }
    if(fin_0==41.0){
        outval=1.0;
    }
    if(fin_0==43.0){
        outval=1.0;
    }
    if(fin_0==59.0){
        outval=1.0;
    }
    if(fin_0==16.0){
        outval=0.0;
    }
    if(fin_0==25.0){
        outval=0.0;
    }
    if(fin_0==36.0){
        outval=0.0;
    }
    if(fin_0==49.0){
        outval=0.0;
    }
    if(fin_0==64.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}