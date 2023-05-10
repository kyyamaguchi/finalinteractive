let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let bear = document.getElementById('bear');

let cat, catright, catsit;


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {


    if (mode == 1){
      displayCat();
    }

    

    //   if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
    //     //make bear appear
    //     bear.style.display='block';
    //     bear.size (25,45);
    //     bear.position (900,750);
    //   }

    //   if ((xpos<400) && (ypos<400)){

    // }
    // console.log("cat is at: " + xpos + ", " + ypos);
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}}


function displayCat(){
  removeElements();
    //lets manipulate the DOM and make our cat move with the arrow keys
    //create an image element in html
    //select size of image

    //let catleft = createImg("images/tob4.gif");
    // catsit = createImg ("images/tob2.png");
    // catsit.size (400,400);
    // cat.size(400,400);
    // catright.size(500,400);
    // catleft.size(500,400);
     // give it an id
    // cat.id('cat');

    //set the position
    //create arithmetic for x and y position. this lets us read out the position
    xpos = width/2-100+x;
    ypos = height/2-100+y;

  
    //position the cat based on the arrow keys
    //catsit.position(xpos, ypos);
    //catsit.position(xpos, ypos);

    

//controls using arrow keys
    if (keyIsPressed){

      if(keyCode == UP_ARROW){
        cat = createImg("images/tobb.gif");
        cat.size(250,450);
        cat.position(xpos, ypos);
        //catsit.position(xpos, ypos);

        //minus 5 in the y direction means up
        y-=5;
        console.log('up')
      } 
      
      if(keyCode == RIGHT_ARROW) {
        catright = createImg("images/tob3.gif");
        catright.size(500,400);
        catright.position(xpos, ypos);
        //plus 5 in the x direction means right
        console.log('right')
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {
        cat = createImg("images/tob1.gif");
        cat.size(400,400);
        cat.position(xpos, ypos);
        console.log('down')
        //plus 5 in the y direction means down
        y+=5;
      }
      

      if(keyCode == LEFT_ARROW) {
        cat = createImg("images/tob4.gif");
        cat.position(xpos, ypos);
        cat.size(500,400);
        // catleft.position(xpos, ypos);
        //minus 5 in the x direction means left
        x-=5;
      }
  }else{
    cat = createImg("images/tob2.png");
        cat.size(300,350);
        cat.position(xpos, ypos);
  }
  
}

