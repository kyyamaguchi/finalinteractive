let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let bear = document.getElementById('mice');


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {


    if (mode == 1){
      displayCat();
    }

    

      if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
        //make bear appear
        bear.style.display='block';
      }

      if ((xpos<400) && (ypos<400)){

        //hide bear again
        mouse.style.display='block';

        //change scene to the next to the next one by adding 1
        mode = 2;

        console.log(mode)
      }

      // //changing of scenes
      if (mode == 2){
        removeElements();
        background(0);
        bear.style.display='none';
      }
    }
    // console.log("cat is at: " + xpos + ", " + ypos);
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}


function displayCat(){
    removeElements();
    //lets manipulate the DOM and make our cat move with the arrow keys
    //create an image element in html
    let cat = createImg("images/tob1.gif");
    let catright = createImg("images/tob3.gif");
    let catleft = createImg("images/tob4.gif");
    let catsit = createImg ("images/tob2.png");
    //select size of image
    catsit.size (400,400);
    cat.size(400,400);
    catright.size(500,400);
    catleft.size(500,400);
     // give it an id
    cat.id('cat');

    //set the position
    //create arithmetic for x and y position. this lets us read out the position
    xpos = width/2-100+x;
    ypos = height/2-100+y;

  
    //position the cat based on the arrow keys
    //catsit.position(xpos, ypos);
    //catsit.position(xpos, ypos);

//controls using arrow keys
    if (keyIsPressed){
      catsit.style.display='none';
      if(keyCode == UP_ARROW){
        cat.position(xpos, ypos);
        catsit.style.display='none';
        //catsit.position(xpos, ypos);

        //minus 5 in the y direction means up
        y-=5;
      } 
      
      if(keyCode == RIGHT_ARROW) {
        catright.position(xpos, ypos);
        catsit.style.display='none';
        //plus 5 in the x direction means right
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {
        cat.position(xpos, ypos);
        catsit.position(xpos, ypos);
        //plus 5 in the y direction means down
        y+=5;
      }

      if(keyCode == LEFT_ARROW) {
        catleft.position(xpos, ypos);
        //minus 5 in the x direction means left
        x-=5;
      }
      //catsit.position(xpos, ypos);
  }
  
}