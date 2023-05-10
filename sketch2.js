
let tobflat = document.getElementById('tobflat');
let tobmove = document.getElementById('tobmove');
tobmove.style.display = 'none';

let xpos = 0;
let ypos = 0;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    let sushi = createImg('images/sushi.png');
    sushi.size (300,400);
    sushi.class ('dragme');

    xpos = width/2-100;
    ypos = height/2-100;

    sushi.position(xpos,ypos);
}
function draw(){
    xpos = mouseX;
    ypos = mouseY;

    if ((xpos>400 && xpos <1000) && (ypos>700 && ypos <1000)){
        let sushi = document.querySelector('.dragme');
        sushi.style.display = 'none';
        tobflat.style.display = 'none';
        tobmove.style.display = 'block';
    }
}