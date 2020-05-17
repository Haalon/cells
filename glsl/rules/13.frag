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
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);
    float fin_0=nhd0+nhd1+nhd2+nhd3;
    if(fin_0>=30.0){
        outval=0.0;
    }
    if(fin_0>=40.0&&fin_0<=42.0){
        outval=1.0;
    }
    if(fin_0>=91.0&&fin_0<=155.0){
        outval=1.0;
    }
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);
    float fin_1=nhd4;
    if(fin_1>=13.0&&fin_1<=19.0){
        outval=1.0;
    }
    if(fin_1>=9.0&&fin_1<=9.0){
        outval=1.0;
    }
    float nhd5=cv(-39.0,-6.0)+cv(-39.0,-5.0)+cv(-39.0,-2.0)+cv(-39.0,-1.0)+cv(-39.0,0.0)+cv(-39.0,1.0)+cv(-39.0,2.0)+cv(-39.0,5.0)+cv(-39.0,6.0)+cv(-38.0,-8.0)+cv(-38.0,-7.0)+cv(-38.0,-6.0)+cv(-38.0,-5.0)+cv(-38.0,-4.0)+cv(-38.0,-3.0)+cv(-38.0,-2.0)+cv(-38.0,-1.0)+cv(-38.0,0.0)+cv(-38.0,1.0)+cv(-38.0,2.0)+cv(-38.0,3.0)+cv(-38.0,4.0)+cv(-38.0,5.0)+cv(-38.0,6.0)+cv(-38.0,7.0)+cv(-38.0,8.0)+cv(-37.0,-10.0)+cv(-37.0,-9.0)+cv(-37.0,-8.0)+cv(-37.0,-7.0)+cv(-37.0,-6.0)+cv(-37.0,-5.0)+cv(-37.0,-4.0)+cv(-37.0,-3.0)+cv(-37.0,-2.0)+cv(-37.0,-1.0)+cv(-37.0,0.0)+cv(-37.0,1.0)+cv(-37.0,2.0)+cv(-37.0,3.0)+cv(-37.0,4.0)+cv(-37.0,5.0)+cv(-37.0,6.0)+cv(-37.0,7.0)+cv(-37.0,8.0)+cv(-37.0,9.0)+cv(-37.0,10.0)+cv(-36.0,-12.0)+cv(-36.0,-11.0)+cv(-36.0,-10.0)+cv(-36.0,-9.0)+cv(-36.0,-8.0)+cv(-36.0,-7.0)+cv(-36.0,-6.0)+cv(-36.0,-5.0)+cv(-36.0,-4.0)+cv(-36.0,-3.0)+cv(-36.0,3.0)+cv(-36.0,4.0)+cv(-36.0,5.0);
    float nhd6=cv(-36.0,6.0)+cv(-36.0,7.0)+cv(-36.0,8.0)+cv(-36.0,9.0)+cv(-36.0,10.0)+cv(-36.0,11.0)+cv(-36.0,12.0)+cv(-35.0,-15.0)+cv(-35.0,-14.0)+cv(-35.0,-13.0)+cv(-35.0,-12.0)+cv(-35.0,-6.0)+cv(-35.0,-4.0)+cv(-35.0,4.0)+cv(-35.0,6.0)+cv(-35.0,12.0)+cv(-35.0,13.0)+cv(-35.0,14.0)+cv(-35.0,15.0)+cv(-34.0,-17.0)+cv(-34.0,-16.0)+cv(-34.0,-15.0)+cv(-34.0,-6.0)+cv(-34.0,-4.0)+cv(-34.0,4.0)+cv(-34.0,6.0)+cv(-34.0,15.0)+cv(-34.0,16.0)+cv(-34.0,17.0)+cv(-33.0,-18.0)+cv(-33.0,-17.0)+cv(-33.0,-1.0)+cv(-33.0,0.0)+cv(-33.0,1.0)+cv(-33.0,17.0)+cv(-33.0,18.0)+cv(-32.0,-20.0)+cv(-32.0,-19.0)+cv(-32.0,-2.0)+cv(-32.0,-1.0)+cv(-32.0,0.0)+cv(-32.0,1.0)+cv(-32.0,2.0)+cv(-32.0,19.0)+cv(-32.0,20.0)+cv(-31.0,-21.0)+cv(-31.0,-20.0)+cv(-31.0,-3.0)+cv(-31.0,-2.0)+cv(-31.0,-1.0)+cv(-31.0,0.0)+cv(-31.0,1.0)+cv(-31.0,2.0)+cv(-31.0,3.0)+cv(-31.0,20.0)+cv(-31.0,21.0)+cv(-30.0,-23.0)+cv(-30.0,-22.0)+cv(-30.0,-4.0)+cv(-30.0,-3.0)+cv(-30.0,-1.0);
    float nhd7=cv(-30.0,0.0)+cv(-30.0,1.0)+cv(-30.0,3.0)+cv(-30.0,4.0)+cv(-30.0,22.0)+cv(-30.0,23.0)+cv(-29.0,-25.0)+cv(-29.0,-24.0)+cv(-29.0,-23.0)+cv(-29.0,-22.0)+cv(-29.0,-4.0)+cv(-29.0,-3.0)+cv(-29.0,3.0)+cv(-29.0,4.0)+cv(-29.0,22.0)+cv(-29.0,23.0)+cv(-29.0,24.0)+cv(-29.0,25.0)+cv(-28.0,-26.0)+cv(-28.0,-25.0)+cv(-28.0,-24.0)+cv(-28.0,-6.0)+cv(-28.0,6.0)+cv(-28.0,24.0)+cv(-28.0,25.0)+cv(-28.0,26.0)+cv(-27.0,-27.0)+cv(-27.0,-26.0)+cv(-27.0,-25.0)+cv(-27.0,-23.0)+cv(-27.0,-22.0)+cv(-27.0,-9.0)+cv(-27.0,-8.0)+cv(-27.0,-7.0)+cv(-27.0,-6.0)+cv(-27.0,-5.0)+cv(-27.0,5.0)+cv(-27.0,6.0)+cv(-27.0,7.0)+cv(-27.0,8.0)+cv(-27.0,9.0)+cv(-27.0,22.0)+cv(-27.0,23.0)+cv(-27.0,25.0)+cv(-27.0,26.0)+cv(-27.0,27.0)+cv(-26.0,-28.0)+cv(-26.0,-27.0)+cv(-26.0,-26.0)+cv(-26.0,-25.0)+cv(-26.0,-24.0)+cv(-26.0,-23.0)+cv(-26.0,-17.0)+cv(-26.0,-12.0)+cv(-26.0,-11.0)+cv(-26.0,-10.0)+cv(-26.0,-9.0)+cv(-26.0,-8.0)+cv(-26.0,-7.0)+cv(-26.0,-6.0)+cv(-26.0,6.0);
    float nhd8=cv(-26.0,7.0)+cv(-26.0,8.0)+cv(-26.0,9.0)+cv(-26.0,10.0)+cv(-26.0,11.0)+cv(-26.0,12.0)+cv(-26.0,17.0)+cv(-26.0,23.0)+cv(-26.0,24.0)+cv(-26.0,25.0)+cv(-26.0,26.0)+cv(-26.0,27.0)+cv(-26.0,28.0)+cv(-25.0,-29.0)+cv(-25.0,-28.0)+cv(-25.0,-27.0)+cv(-25.0,-26.0)+cv(-25.0,-25.0)+cv(-25.0,-24.0)+cv(-25.0,-14.0)+cv(-25.0,-13.0)+cv(-25.0,-12.0)+cv(-25.0,-11.0)+cv(-25.0,-10.0)+cv(-25.0,-9.0)+cv(-25.0,-8.0)+cv(-25.0,-7.0)+cv(-25.0,7.0)+cv(-25.0,8.0)+cv(-25.0,9.0)+cv(-25.0,10.0)+cv(-25.0,11.0)+cv(-25.0,12.0)+cv(-25.0,13.0)+cv(-25.0,14.0)+cv(-25.0,24.0)+cv(-25.0,25.0)+cv(-25.0,26.0)+cv(-25.0,27.0)+cv(-25.0,28.0)+cv(-25.0,29.0)+cv(-24.0,-29.0)+cv(-24.0,-28.0)+cv(-24.0,-26.0)+cv(-24.0,-25.0)+cv(-24.0,-14.0)+cv(-24.0,-12.0)+cv(-24.0,-11.0)+cv(-24.0,-10.0)+cv(-24.0,-9.0)+cv(-24.0,-8.0)+cv(-24.0,8.0)+cv(-24.0,9.0)+cv(-24.0,10.0)+cv(-24.0,11.0)+cv(-24.0,12.0)+cv(-24.0,14.0)+cv(-24.0,25.0)+cv(-24.0,26.0)+cv(-24.0,28.0)+cv(-24.0,29.0);
    float nhd9=cv(-23.0,-30.0)+cv(-23.0,-29.0)+cv(-23.0,-27.0)+cv(-23.0,-26.0)+cv(-23.0,-18.0)+cv(-23.0,-17.0)+cv(-23.0,-15.0)+cv(-23.0,-14.0)+cv(-23.0,-13.0)+cv(-23.0,-12.0)+cv(-23.0,-11.0)+cv(-23.0,-10.0)+cv(-23.0,-9.0)+cv(-23.0,9.0)+cv(-23.0,10.0)+cv(-23.0,11.0)+cv(-23.0,12.0)+cv(-23.0,13.0)+cv(-23.0,14.0)+cv(-23.0,15.0)+cv(-23.0,17.0)+cv(-23.0,18.0)+cv(-23.0,26.0)+cv(-23.0,27.0)+cv(-23.0,29.0)+cv(-23.0,30.0)+cv(-22.0,-30.0)+cv(-22.0,-29.0)+cv(-22.0,-27.0)+cv(-22.0,-18.0)+cv(-22.0,-11.0)+cv(-22.0,11.0)+cv(-22.0,18.0)+cv(-22.0,27.0)+cv(-22.0,29.0)+cv(-22.0,30.0)+cv(-21.0,-31.0)+cv(-21.0,-20.0)+cv(-21.0,-19.0)+cv(-21.0,19.0)+cv(-21.0,20.0)+cv(-21.0,31.0)+cv(-20.0,-32.0)+cv(-20.0,-31.0)+cv(-20.0,-21.0)+cv(-20.0,-20.0)+cv(-20.0,-19.0)+cv(-20.0,-18.0)+cv(-20.0,-17.0)+cv(-20.0,-1.0)+cv(-20.0,1.0)+cv(-20.0,17.0)+cv(-20.0,18.0)+cv(-20.0,19.0)+cv(-20.0,20.0)+cv(-20.0,21.0)+cv(-20.0,31.0)+cv(-20.0,32.0)+cv(-19.0,-32.0)+cv(-19.0,-21.0)+cv(-19.0,-20.0);
    float nhd10=cv(-19.0,-19.0)+cv(-19.0,-18.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,-1.0)+cv(-19.0,1.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,18.0)+cv(-19.0,19.0)+cv(-19.0,20.0)+cv(-19.0,21.0)+cv(-19.0,32.0)+cv(-18.0,-33.0)+cv(-18.0,-23.0)+cv(-18.0,-22.0)+cv(-18.0,-20.0)+cv(-18.0,-19.0)+cv(-18.0,-18.0)+cv(-18.0,-4.0)+cv(-18.0,-3.0)+cv(-18.0,-2.0)+cv(-18.0,-1.0)+cv(-18.0,1.0)+cv(-18.0,2.0)+cv(-18.0,3.0)+cv(-18.0,4.0)+cv(-18.0,18.0)+cv(-18.0,19.0)+cv(-18.0,20.0)+cv(-18.0,22.0)+cv(-18.0,23.0)+cv(-18.0,33.0)+cv(-17.0,-34.0)+cv(-17.0,-33.0)+cv(-17.0,-26.0)+cv(-17.0,-23.0)+cv(-17.0,-20.0)+cv(-17.0,-8.0)+cv(-17.0,-6.0)+cv(-17.0,-5.0)+cv(-17.0,-4.0)+cv(-17.0,-2.0)+cv(-17.0,2.0)+cv(-17.0,4.0)+cv(-17.0,5.0)+cv(-17.0,6.0)+cv(-17.0,8.0)+cv(-17.0,20.0)+cv(-17.0,23.0)+cv(-17.0,26.0)+cv(-17.0,33.0)+cv(-17.0,34.0)+cv(-16.0,-34.0)+cv(-16.0,-7.0)+cv(-16.0,-6.0)+cv(-16.0,-4.0)+cv(-16.0,4.0)+cv(-16.0,6.0)+cv(-16.0,7.0)+cv(-16.0,34.0);
    float nhd11=cv(-15.0,-35.0)+cv(-15.0,-34.0)+cv(-15.0,-23.0)+cv(-15.0,-11.0)+cv(-15.0,-9.0)+cv(-15.0,-8.0)+cv(-15.0,-7.0)+cv(-15.0,-4.0)+cv(-15.0,4.0)+cv(-15.0,7.0)+cv(-15.0,8.0)+cv(-15.0,9.0)+cv(-15.0,11.0)+cv(-15.0,23.0)+cv(-15.0,34.0)+cv(-15.0,35.0)+cv(-14.0,-35.0)+cv(-14.0,-25.0)+cv(-14.0,-24.0)+cv(-14.0,-23.0)+cv(-14.0,-12.0)+cv(-14.0,-11.0)+cv(-14.0,-10.0)+cv(-14.0,-9.0)+cv(-14.0,9.0)+cv(-14.0,10.0)+cv(-14.0,11.0)+cv(-14.0,12.0)+cv(-14.0,23.0)+cv(-14.0,24.0)+cv(-14.0,25.0)+cv(-14.0,35.0)+cv(-13.0,-35.0)+cv(-13.0,-25.0)+cv(-13.0,-23.0)+cv(-13.0,-13.0)+cv(-13.0,-12.0)+cv(-13.0,-11.0)+cv(-13.0,-10.0)+cv(-13.0,10.0)+cv(-13.0,11.0)+cv(-13.0,12.0)+cv(-13.0,13.0)+cv(-13.0,23.0)+cv(-13.0,25.0)+cv(-13.0,35.0)+cv(-12.0,-36.0)+cv(-12.0,-35.0)+cv(-12.0,-26.0)+cv(-12.0,-25.0)+cv(-12.0,-24.0)+cv(-12.0,-23.0)+cv(-12.0,-14.0)+cv(-12.0,-13.0)+cv(-12.0,-12.0)+cv(-12.0,-11.0)+cv(-12.0,11.0)+cv(-12.0,12.0)+cv(-12.0,13.0)+cv(-12.0,14.0)+cv(-12.0,23.0);
    float nhd12=cv(-12.0,24.0)+cv(-12.0,25.0)+cv(-12.0,26.0)+cv(-12.0,35.0)+cv(-12.0,36.0)+cv(-11.0,-36.0)+cv(-11.0,-26.0)+cv(-11.0,-25.0)+cv(-11.0,-24.0)+cv(-11.0,-23.0)+cv(-11.0,-22.0)+cv(-11.0,-15.0)+cv(-11.0,-14.0)+cv(-11.0,-13.0)+cv(-11.0,-12.0)+cv(-11.0,12.0)+cv(-11.0,13.0)+cv(-11.0,14.0)+cv(-11.0,15.0)+cv(-11.0,22.0)+cv(-11.0,23.0)+cv(-11.0,24.0)+cv(-11.0,25.0)+cv(-11.0,26.0)+cv(-11.0,36.0)+cv(-10.0,-37.0)+cv(-10.0,-36.0)+cv(-10.0,-26.0)+cv(-10.0,-25.0)+cv(-10.0,-24.0)+cv(-10.0,-23.0)+cv(-10.0,-14.0)+cv(-10.0,-13.0)+cv(-10.0,13.0)+cv(-10.0,14.0)+cv(-10.0,23.0)+cv(-10.0,24.0)+cv(-10.0,25.0)+cv(-10.0,26.0)+cv(-10.0,36.0)+cv(-10.0,37.0)+cv(-9.0,-37.0)+cv(-9.0,-36.0)+cv(-9.0,-27.0)+cv(-9.0,-26.0)+cv(-9.0,-25.0)+cv(-9.0,-24.0)+cv(-9.0,-23.0)+cv(-9.0,-15.0)+cv(-9.0,-14.0)+cv(-9.0,14.0)+cv(-9.0,15.0)+cv(-9.0,23.0)+cv(-9.0,24.0)+cv(-9.0,25.0)+cv(-9.0,26.0)+cv(-9.0,27.0)+cv(-9.0,36.0)+cv(-9.0,37.0)+cv(-8.0,-38.0)+cv(-8.0,-37.0);
    float nhd13=cv(-8.0,-36.0)+cv(-8.0,-27.0)+cv(-8.0,-26.0)+cv(-8.0,-25.0)+cv(-8.0,-24.0)+cv(-8.0,-17.0)+cv(-8.0,-15.0)+cv(-8.0,15.0)+cv(-8.0,17.0)+cv(-8.0,24.0)+cv(-8.0,25.0)+cv(-8.0,26.0)+cv(-8.0,27.0)+cv(-8.0,36.0)+cv(-8.0,37.0)+cv(-8.0,38.0)+cv(-7.0,-38.0)+cv(-7.0,-37.0)+cv(-7.0,-36.0)+cv(-7.0,-27.0)+cv(-7.0,-26.0)+cv(-7.0,-25.0)+cv(-7.0,-16.0)+cv(-7.0,-15.0)+cv(-7.0,15.0)+cv(-7.0,16.0)+cv(-7.0,25.0)+cv(-7.0,26.0)+cv(-7.0,27.0)+cv(-7.0,36.0)+cv(-7.0,37.0)+cv(-7.0,38.0)+cv(-6.0,-39.0)+cv(-6.0,-38.0)+cv(-6.0,-37.0)+cv(-6.0,-36.0)+cv(-6.0,-35.0)+cv(-6.0,-34.0)+cv(-6.0,-28.0)+cv(-6.0,-27.0)+cv(-6.0,-26.0)+cv(-6.0,-17.0)+cv(-6.0,-16.0)+cv(-6.0,16.0)+cv(-6.0,17.0)+cv(-6.0,26.0)+cv(-6.0,27.0)+cv(-6.0,28.0)+cv(-6.0,34.0)+cv(-6.0,35.0)+cv(-6.0,36.0)+cv(-6.0,37.0)+cv(-6.0,38.0)+cv(-6.0,39.0)+cv(-5.0,-39.0)+cv(-5.0,-38.0)+cv(-5.0,-37.0)+cv(-5.0,-36.0)+cv(-5.0,-27.0)+cv(-5.0,-17.0)+cv(-5.0,-1.0);
    float nhd14=cv(-5.0,1.0)+cv(-5.0,17.0)+cv(-5.0,27.0)+cv(-5.0,36.0)+cv(-5.0,37.0)+cv(-5.0,38.0)+cv(-5.0,39.0)+cv(-4.0,-38.0)+cv(-4.0,-37.0)+cv(-4.0,-36.0)+cv(-4.0,-35.0)+cv(-4.0,-34.0)+cv(-4.0,-30.0)+cv(-4.0,-29.0)+cv(-4.0,-19.0)+cv(-4.0,-18.0)+cv(-4.0,-17.0)+cv(-4.0,-16.0)+cv(-4.0,-15.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,15.0)+cv(-4.0,16.0)+cv(-4.0,17.0)+cv(-4.0,18.0)+cv(-4.0,19.0)+cv(-4.0,29.0)+cv(-4.0,30.0)+cv(-4.0,34.0)+cv(-4.0,35.0)+cv(-4.0,36.0)+cv(-4.0,37.0)+cv(-4.0,38.0)+cv(-3.0,-38.0)+cv(-3.0,-37.0)+cv(-3.0,-36.0)+cv(-3.0,-31.0)+cv(-3.0,-30.0)+cv(-3.0,-29.0)+cv(-3.0,-19.0)+cv(-3.0,-18.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,18.0)+cv(-3.0,19.0)+cv(-3.0,29.0)+cv(-3.0,30.0)+cv(-3.0,31.0)+cv(-3.0,36.0)+cv(-3.0,37.0)+cv(-3.0,38.0)+cv(-2.0,-39.0)+cv(-2.0,-38.0);
    float nhd15=cv(-2.0,-37.0)+cv(-2.0,-32.0)+cv(-2.0,-31.0)+cv(-2.0,-18.0)+cv(-2.0,-17.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,17.0)+cv(-2.0,18.0)+cv(-2.0,31.0)+cv(-2.0,32.0)+cv(-2.0,37.0)+cv(-2.0,38.0)+cv(-2.0,39.0)+cv(-1.0,-39.0)+cv(-1.0,-38.0)+cv(-1.0,-37.0)+cv(-1.0,-33.0)+cv(-1.0,-32.0)+cv(-1.0,-31.0)+cv(-1.0,-30.0)+cv(-1.0,-20.0)+cv(-1.0,-19.0)+cv(-1.0,-18.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,-3.0)+cv(-1.0,-2.0)+cv(-1.0,2.0)+cv(-1.0,3.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,18.0)+cv(-1.0,19.0)+cv(-1.0,20.0)+cv(-1.0,30.0)+cv(-1.0,31.0)+cv(-1.0,32.0)+cv(-1.0,33.0)+cv(-1.0,37.0)+cv(-1.0,38.0)+cv(-1.0,39.0)+cv(0.0,-39.0)+cv(0.0,-38.0)+cv(0.0,-37.0)+cv(0.0,-33.0)+cv(0.0,-32.0)+cv(0.0,-31.0)+cv(0.0,-30.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(0.0,30.0)+cv(0.0,31.0);
    float nhd16=cv(0.0,32.0)+cv(0.0,33.0)+cv(0.0,37.0)+cv(0.0,38.0)+cv(0.0,39.0)+cv(1.0,-39.0)+cv(1.0,-38.0)+cv(1.0,-37.0)+cv(1.0,-33.0)+cv(1.0,-32.0)+cv(1.0,-31.0)+cv(1.0,-30.0)+cv(1.0,-20.0)+cv(1.0,-19.0)+cv(1.0,-18.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,-3.0)+cv(1.0,-2.0)+cv(1.0,2.0)+cv(1.0,3.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,18.0)+cv(1.0,19.0)+cv(1.0,20.0)+cv(1.0,30.0)+cv(1.0,31.0)+cv(1.0,32.0)+cv(1.0,33.0)+cv(1.0,37.0)+cv(1.0,38.0)+cv(1.0,39.0)+cv(2.0,-39.0)+cv(2.0,-38.0)+cv(2.0,-37.0)+cv(2.0,-32.0)+cv(2.0,-31.0)+cv(2.0,-18.0)+cv(2.0,-17.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,17.0)+cv(2.0,18.0)+cv(2.0,31.0)+cv(2.0,32.0)+cv(2.0,37.0)+cv(2.0,38.0)+cv(2.0,39.0)+cv(3.0,-38.0)+cv(3.0,-37.0)+cv(3.0,-36.0)+cv(3.0,-31.0)+cv(3.0,-30.0)+cv(3.0,-29.0);
    float nhd17=cv(3.0,-19.0)+cv(3.0,-18.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,18.0)+cv(3.0,19.0)+cv(3.0,29.0)+cv(3.0,30.0)+cv(3.0,31.0)+cv(3.0,36.0)+cv(3.0,37.0)+cv(3.0,38.0)+cv(4.0,-38.0)+cv(4.0,-37.0)+cv(4.0,-36.0)+cv(4.0,-35.0)+cv(4.0,-34.0)+cv(4.0,-30.0)+cv(4.0,-29.0)+cv(4.0,-19.0)+cv(4.0,-18.0)+cv(4.0,-17.0)+cv(4.0,-16.0)+cv(4.0,-15.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,15.0)+cv(4.0,16.0)+cv(4.0,17.0)+cv(4.0,18.0)+cv(4.0,19.0)+cv(4.0,29.0)+cv(4.0,30.0)+cv(4.0,34.0)+cv(4.0,35.0)+cv(4.0,36.0)+cv(4.0,37.0)+cv(4.0,38.0)+cv(5.0,-39.0)+cv(5.0,-38.0)+cv(5.0,-37.0)+cv(5.0,-36.0)+cv(5.0,-27.0)+cv(5.0,-17.0)+cv(5.0,-1.0)+cv(5.0,1.0)+cv(5.0,17.0)+cv(5.0,27.0)+cv(5.0,36.0)+cv(5.0,37.0)+cv(5.0,38.0)+cv(5.0,39.0)+cv(6.0,-39.0);
    float nhd18=cv(6.0,-38.0)+cv(6.0,-37.0)+cv(6.0,-36.0)+cv(6.0,-35.0)+cv(6.0,-34.0)+cv(6.0,-28.0)+cv(6.0,-27.0)+cv(6.0,-26.0)+cv(6.0,-17.0)+cv(6.0,-16.0)+cv(6.0,16.0)+cv(6.0,17.0)+cv(6.0,26.0)+cv(6.0,27.0)+cv(6.0,28.0)+cv(6.0,34.0)+cv(6.0,35.0)+cv(6.0,36.0)+cv(6.0,37.0)+cv(6.0,38.0)+cv(6.0,39.0)+cv(7.0,-38.0)+cv(7.0,-37.0)+cv(7.0,-36.0)+cv(7.0,-27.0)+cv(7.0,-26.0)+cv(7.0,-25.0)+cv(7.0,-16.0)+cv(7.0,-15.0)+cv(7.0,15.0)+cv(7.0,16.0)+cv(7.0,25.0)+cv(7.0,26.0)+cv(7.0,27.0)+cv(7.0,36.0)+cv(7.0,37.0)+cv(7.0,38.0)+cv(8.0,-38.0)+cv(8.0,-37.0)+cv(8.0,-36.0)+cv(8.0,-27.0)+cv(8.0,-26.0)+cv(8.0,-25.0)+cv(8.0,-24.0)+cv(8.0,-17.0)+cv(8.0,-15.0)+cv(8.0,15.0)+cv(8.0,17.0)+cv(8.0,24.0)+cv(8.0,25.0)+cv(8.0,26.0)+cv(8.0,27.0)+cv(8.0,36.0)+cv(8.0,37.0)+cv(8.0,38.0)+cv(9.0,-37.0)+cv(9.0,-36.0)+cv(9.0,-27.0)+cv(9.0,-26.0)+cv(9.0,-25.0)+cv(9.0,-24.0);
    float nhd19=cv(9.0,-23.0)+cv(9.0,-15.0)+cv(9.0,-14.0)+cv(9.0,14.0)+cv(9.0,15.0)+cv(9.0,23.0)+cv(9.0,24.0)+cv(9.0,25.0)+cv(9.0,26.0)+cv(9.0,27.0)+cv(9.0,36.0)+cv(9.0,37.0)+cv(10.0,-37.0)+cv(10.0,-36.0)+cv(10.0,-26.0)+cv(10.0,-25.0)+cv(10.0,-24.0)+cv(10.0,-23.0)+cv(10.0,-14.0)+cv(10.0,-13.0)+cv(10.0,13.0)+cv(10.0,14.0)+cv(10.0,23.0)+cv(10.0,24.0)+cv(10.0,25.0)+cv(10.0,26.0)+cv(10.0,36.0)+cv(10.0,37.0)+cv(11.0,-36.0)+cv(11.0,-26.0)+cv(11.0,-25.0)+cv(11.0,-24.0)+cv(11.0,-23.0)+cv(11.0,-22.0)+cv(11.0,-15.0)+cv(11.0,-14.0)+cv(11.0,-13.0)+cv(11.0,-12.0)+cv(11.0,12.0)+cv(11.0,13.0)+cv(11.0,14.0)+cv(11.0,15.0)+cv(11.0,22.0)+cv(11.0,23.0)+cv(11.0,24.0)+cv(11.0,25.0)+cv(11.0,26.0)+cv(11.0,36.0)+cv(12.0,-36.0)+cv(12.0,-35.0)+cv(12.0,-26.0)+cv(12.0,-25.0)+cv(12.0,-24.0)+cv(12.0,-23.0)+cv(12.0,-14.0)+cv(12.0,-13.0)+cv(12.0,-12.0)+cv(12.0,-11.0)+cv(12.0,11.0)+cv(12.0,12.0)+cv(12.0,13.0);
    float nhd20=cv(12.0,14.0)+cv(12.0,23.0)+cv(12.0,24.0)+cv(12.0,25.0)+cv(12.0,26.0)+cv(12.0,35.0)+cv(12.0,36.0)+cv(13.0,-35.0)+cv(13.0,-25.0)+cv(13.0,-23.0)+cv(13.0,-13.0)+cv(13.0,-12.0)+cv(13.0,-11.0)+cv(13.0,-10.0)+cv(13.0,10.0)+cv(13.0,11.0)+cv(13.0,12.0)+cv(13.0,13.0)+cv(13.0,23.0)+cv(13.0,25.0)+cv(13.0,35.0)+cv(14.0,-35.0)+cv(14.0,-25.0)+cv(14.0,-24.0)+cv(14.0,-23.0)+cv(14.0,-12.0)+cv(14.0,-11.0)+cv(14.0,-10.0)+cv(14.0,-9.0)+cv(14.0,9.0)+cv(14.0,10.0)+cv(14.0,11.0)+cv(14.0,12.0)+cv(14.0,23.0)+cv(14.0,24.0)+cv(14.0,25.0)+cv(14.0,35.0)+cv(15.0,-35.0)+cv(15.0,-34.0)+cv(15.0,-23.0)+cv(15.0,-11.0)+cv(15.0,-9.0)+cv(15.0,-8.0)+cv(15.0,-7.0)+cv(15.0,-4.0)+cv(15.0,4.0)+cv(15.0,7.0)+cv(15.0,8.0)+cv(15.0,9.0)+cv(15.0,11.0)+cv(15.0,23.0)+cv(15.0,34.0)+cv(15.0,35.0)+cv(16.0,-34.0)+cv(16.0,-7.0)+cv(16.0,-6.0)+cv(16.0,-4.0)+cv(16.0,4.0)+cv(16.0,6.0)+cv(16.0,7.0)+cv(16.0,34.0);
    float nhd21=cv(17.0,-34.0)+cv(17.0,-33.0)+cv(17.0,-26.0)+cv(17.0,-23.0)+cv(17.0,-20.0)+cv(17.0,-8.0)+cv(17.0,-6.0)+cv(17.0,-5.0)+cv(17.0,-4.0)+cv(17.0,-2.0)+cv(17.0,2.0)+cv(17.0,4.0)+cv(17.0,5.0)+cv(17.0,6.0)+cv(17.0,8.0)+cv(17.0,20.0)+cv(17.0,23.0)+cv(17.0,26.0)+cv(17.0,33.0)+cv(17.0,34.0)+cv(18.0,-33.0)+cv(18.0,-23.0)+cv(18.0,-22.0)+cv(18.0,-20.0)+cv(18.0,-19.0)+cv(18.0,-18.0)+cv(18.0,-4.0)+cv(18.0,-3.0)+cv(18.0,-2.0)+cv(18.0,-1.0)+cv(18.0,1.0)+cv(18.0,2.0)+cv(18.0,3.0)+cv(18.0,4.0)+cv(18.0,18.0)+cv(18.0,19.0)+cv(18.0,20.0)+cv(18.0,22.0)+cv(18.0,23.0)+cv(18.0,33.0)+cv(19.0,-32.0)+cv(19.0,-21.0)+cv(19.0,-20.0)+cv(19.0,-19.0)+cv(19.0,-18.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,-1.0)+cv(19.0,1.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,18.0)+cv(19.0,19.0)+cv(19.0,20.0)+cv(19.0,21.0)+cv(19.0,32.0)+cv(20.0,-32.0)+cv(20.0,-31.0)+cv(20.0,-21.0)+cv(20.0,-20.0)+cv(20.0,-19.0);
    float nhd22=cv(20.0,-18.0)+cv(20.0,-17.0)+cv(20.0,-1.0)+cv(20.0,1.0)+cv(20.0,17.0)+cv(20.0,18.0)+cv(20.0,19.0)+cv(20.0,20.0)+cv(20.0,21.0)+cv(20.0,31.0)+cv(20.0,32.0)+cv(21.0,-31.0)+cv(21.0,-20.0)+cv(21.0,-19.0)+cv(21.0,19.0)+cv(21.0,20.0)+cv(21.0,31.0)+cv(22.0,-30.0)+cv(22.0,-29.0)+cv(22.0,-27.0)+cv(22.0,-18.0)+cv(22.0,-11.0)+cv(22.0,11.0)+cv(22.0,18.0)+cv(22.0,27.0)+cv(22.0,29.0)+cv(22.0,30.0)+cv(23.0,-30.0)+cv(23.0,-29.0)+cv(23.0,-27.0)+cv(23.0,-26.0)+cv(23.0,-18.0)+cv(23.0,-17.0)+cv(23.0,-15.0)+cv(23.0,-14.0)+cv(23.0,-13.0)+cv(23.0,-12.0)+cv(23.0,-11.0)+cv(23.0,-10.0)+cv(23.0,-9.0)+cv(23.0,9.0)+cv(23.0,10.0)+cv(23.0,11.0)+cv(23.0,12.0)+cv(23.0,13.0)+cv(23.0,14.0)+cv(23.0,15.0)+cv(23.0,17.0)+cv(23.0,18.0)+cv(23.0,26.0)+cv(23.0,27.0)+cv(23.0,29.0)+cv(23.0,30.0)+cv(24.0,-29.0)+cv(24.0,-28.0)+cv(24.0,-26.0)+cv(24.0,-25.0)+cv(24.0,-14.0)+cv(24.0,-12.0)+cv(24.0,-11.0)+cv(24.0,-10.0);
    float nhd23=cv(24.0,-9.0)+cv(24.0,-8.0)+cv(24.0,8.0)+cv(24.0,9.0)+cv(24.0,10.0)+cv(24.0,11.0)+cv(24.0,12.0)+cv(24.0,14.0)+cv(24.0,25.0)+cv(24.0,26.0)+cv(24.0,28.0)+cv(24.0,29.0)+cv(25.0,-29.0)+cv(25.0,-28.0)+cv(25.0,-27.0)+cv(25.0,-26.0)+cv(25.0,-25.0)+cv(25.0,-24.0)+cv(25.0,-14.0)+cv(25.0,-13.0)+cv(25.0,-12.0)+cv(25.0,-11.0)+cv(25.0,-10.0)+cv(25.0,-9.0)+cv(25.0,-8.0)+cv(25.0,-7.0)+cv(25.0,7.0)+cv(25.0,8.0)+cv(25.0,9.0)+cv(25.0,10.0)+cv(25.0,11.0)+cv(25.0,12.0)+cv(25.0,13.0)+cv(25.0,14.0)+cv(25.0,24.0)+cv(25.0,25.0)+cv(25.0,26.0)+cv(25.0,27.0)+cv(25.0,28.0)+cv(25.0,29.0)+cv(26.0,-28.0)+cv(26.0,-27.0)+cv(26.0,-26.0)+cv(26.0,-25.0)+cv(26.0,-24.0)+cv(26.0,-23.0)+cv(26.0,-17.0)+cv(26.0,-12.0)+cv(26.0,-11.0)+cv(26.0,-10.0)+cv(26.0,-9.0)+cv(26.0,-8.0)+cv(26.0,-7.0)+cv(26.0,-6.0)+cv(26.0,6.0)+cv(26.0,7.0)+cv(26.0,8.0)+cv(26.0,9.0)+cv(26.0,10.0)+cv(26.0,11.0)+cv(26.0,12.0);
    float nhd24=cv(26.0,17.0)+cv(26.0,23.0)+cv(26.0,24.0)+cv(26.0,25.0)+cv(26.0,26.0)+cv(26.0,27.0)+cv(26.0,28.0)+cv(27.0,-27.0)+cv(27.0,-26.0)+cv(27.0,-25.0)+cv(27.0,-23.0)+cv(27.0,-22.0)+cv(27.0,-9.0)+cv(27.0,-8.0)+cv(27.0,-7.0)+cv(27.0,-6.0)+cv(27.0,-5.0)+cv(27.0,5.0)+cv(27.0,6.0)+cv(27.0,7.0)+cv(27.0,8.0)+cv(27.0,9.0)+cv(27.0,22.0)+cv(27.0,23.0)+cv(27.0,25.0)+cv(27.0,26.0)+cv(27.0,27.0)+cv(28.0,-26.0)+cv(28.0,-25.0)+cv(28.0,-24.0)+cv(28.0,-6.0)+cv(28.0,6.0)+cv(28.0,24.0)+cv(28.0,25.0)+cv(28.0,26.0)+cv(29.0,-25.0)+cv(29.0,-24.0)+cv(29.0,-23.0)+cv(29.0,-22.0)+cv(29.0,-4.0)+cv(29.0,-3.0)+cv(29.0,3.0)+cv(29.0,4.0)+cv(29.0,22.0)+cv(29.0,23.0)+cv(29.0,24.0)+cv(29.0,25.0)+cv(30.0,-23.0)+cv(30.0,-22.0)+cv(30.0,-4.0)+cv(30.0,-3.0)+cv(30.0,-1.0)+cv(30.0,0.0)+cv(30.0,1.0)+cv(30.0,3.0)+cv(30.0,4.0)+cv(30.0,22.0)+cv(30.0,23.0)+cv(31.0,-21.0)+cv(31.0,-20.0)+cv(31.0,-3.0);
    float nhd25=cv(31.0,-2.0)+cv(31.0,-1.0)+cv(31.0,0.0)+cv(31.0,1.0)+cv(31.0,2.0)+cv(31.0,3.0)+cv(31.0,20.0)+cv(31.0,21.0)+cv(32.0,-20.0)+cv(32.0,-19.0)+cv(32.0,-2.0)+cv(32.0,-1.0)+cv(32.0,0.0)+cv(32.0,1.0)+cv(32.0,2.0)+cv(32.0,19.0)+cv(32.0,20.0)+cv(33.0,-18.0)+cv(33.0,-17.0)+cv(33.0,-1.0)+cv(33.0,0.0)+cv(33.0,1.0)+cv(33.0,17.0)+cv(33.0,18.0)+cv(34.0,-17.0)+cv(34.0,-16.0)+cv(34.0,-15.0)+cv(34.0,-6.0)+cv(34.0,-4.0)+cv(34.0,4.0)+cv(34.0,6.0)+cv(34.0,15.0)+cv(34.0,16.0)+cv(34.0,17.0)+cv(35.0,-15.0)+cv(35.0,-14.0)+cv(35.0,-13.0)+cv(35.0,-12.0)+cv(35.0,-6.0)+cv(35.0,-4.0)+cv(35.0,4.0)+cv(35.0,6.0)+cv(35.0,12.0)+cv(35.0,13.0)+cv(35.0,14.0)+cv(35.0,15.0)+cv(36.0,-12.0)+cv(36.0,-11.0)+cv(36.0,-10.0)+cv(36.0,-9.0)+cv(36.0,-8.0)+cv(36.0,-7.0)+cv(36.0,-6.0)+cv(36.0,-5.0)+cv(36.0,-4.0)+cv(36.0,-3.0)+cv(36.0,3.0)+cv(36.0,4.0)+cv(36.0,5.0)+cv(36.0,6.0)+cv(36.0,7.0);
    float nhd26=cv(36.0,8.0)+cv(36.0,9.0)+cv(36.0,10.0)+cv(36.0,11.0)+cv(36.0,12.0)+cv(37.0,-10.0)+cv(37.0,-9.0)+cv(37.0,-8.0)+cv(37.0,-7.0)+cv(37.0,-6.0)+cv(37.0,-5.0)+cv(37.0,-4.0)+cv(37.0,-3.0)+cv(37.0,-2.0)+cv(37.0,-1.0)+cv(37.0,0.0)+cv(37.0,1.0)+cv(37.0,2.0)+cv(37.0,3.0)+cv(37.0,4.0)+cv(37.0,5.0)+cv(37.0,6.0)+cv(37.0,7.0)+cv(37.0,8.0)+cv(37.0,9.0)+cv(37.0,10.0)+cv(38.0,-8.0)+cv(38.0,-7.0)+cv(38.0,-6.0)+cv(38.0,-5.0)+cv(38.0,-4.0)+cv(38.0,-3.0)+cv(38.0,-2.0)+cv(38.0,-1.0)+cv(38.0,0.0)+cv(38.0,1.0)+cv(38.0,2.0)+cv(38.0,3.0)+cv(38.0,4.0)+cv(38.0,5.0)+cv(38.0,6.0)+cv(38.0,7.0)+cv(38.0,8.0)+cv(39.0,-6.0)+cv(39.0,-5.0)+cv(39.0,-2.0)+cv(39.0,-1.0)+cv(39.0,0.0)+cv(39.0,1.0)+cv(39.0,2.0)+cv(39.0,5.0)+cv(39.0,6.0);
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10+nhd11+nhd12+nhd13+nhd14+nhd15+nhd16+nhd17+nhd18+nhd19+nhd20+nhd21+nhd22+nhd23+nhd24+nhd25+nhd26;
    if(fin_2>=580.0&&fin_2<=880.0){
        outval=1.0;
    }
    if(fin_2>=300.0&&fin_2<=480.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}