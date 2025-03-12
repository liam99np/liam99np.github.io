/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  }
  var walker = { 
    X: 0, // x-coordinate location
    Y: 0, // y-coordinate location
    speedX: 0, // speed along the x-axis
    speedY: 0, // speed along the y-axis
  };
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keyup', handleKeyUp);    
  $(document).on('keydown', handleKeyDown);                      // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', repositionGameItem); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function handleKeyDown(event){  
  
    if (event.keyCode === KEY.LEFT) {
      console.log("left pressed"); // print "left pressed" if the left arrow key is pressed
      walker.speedX = -3; // update speed to move left
    } else if (event.keyCode === KEY.UP) {
      console.log("up pressed"); // print "up pressed" if the up arrow key is pressed
      walker.speedY = -3; // update speed to move up
    } else if (event.keyCode === KEY.RIGHT) {
      console.log("right pressed"); // print "right pressed" if the right arrow key is pressed
      walker.speedX = 3; // update speed to move right
    } else if (event.keyCode === KEY.DOWN) {
      console.log("down pressed"); // print "down pressed" if the down arrow key is pressed
      walker.speedY = 3; // update speed to move down
    }
  
  } 
  
  function handleKeyUp(event){
    walker.speedX = 0
    walker.speedY = 0
  }

  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    wallCollision()
  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(event){
   walker.X += walker.speedX
   walker.Y += walker.speedY
  
  }

  function redrawGameItem(){
    $("#walker").css("left", walker.X + "px")
    $("#walker").css("top", walker.Y + "px")
  }

  function wallCollision(){
    var boardWidth  =  $("#board").width()
    var boardHeight =  $("#board").height()
    if(walker.Y > boardHeight - $("#walker").height()){
      walker.speedY = 0
      walker.Y -= 5
    }
    if(walker.X < 0){
      walker.speedX = 0
      walker.X += 5
    }
    if(walker.X > boardWidth - $("#walker").width()){
      walker.speedX = 0
      walker.X -= 5
    }
    if(walker.Y < 0){
      walker.speedY = 0
      walker.Y += 5
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
