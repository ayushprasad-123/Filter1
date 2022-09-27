function preload(){}
function setup(){
    c=createCanvas(424,300);
    c.center();
    cam=createCapture(VIDEO);
    cam.hide();
}
function draw(){
    image(cam,0,0,424,300);
}
function click(){
    save("filtered_img","jpeg");
}
