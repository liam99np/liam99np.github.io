// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});


/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////


// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}


// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
 
 
  reddify();




  applyFilter();


  // do not change the below line of code
  render($("#display"), image);
}


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter() {


  for (let r = 0; r < image.length; r++) {
    for (let c = 0; c < image[r].length; c++) {
      let rgbArr = rgbStringToArray(image[r][c]);


      image[r][c] = rgbArrayToString(rgbArr);
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground() {


 
  for (let r = 0; r < image.length; r++) {
    for (let c = 0; c < image[r].length; c++) {


      if (image[r][c] !== "rgb(150, 150, 150)") {
        let rgbArr = rgbStringToArray(image[r][c]);




        rgbArr[RED] = Math.min(255, rgbArr[RED] + 50);  


       
        image[r][c] = rgbArrayToString(rgbArr);
      }
    }
  }
}


// TODO 5: Create the keepInBounds function
function keepInBounds(rgbArr) {


  rgbArr[RED] = Math.max(0, Math.min(255, rgbArr[RED]));
  rgbArr[GREEN] = Math.max(0, Math.min(255, rgbArr[GREEN]));
  rgbArr[BLUE] = Math.max(0, Math.min(255, rgbArr[BLUE]));
 
  return rgbArr;
}


// TODO 3: Create reddify function
function reddify() {


 
  for (let r = 0; r < image.length; r++) {
    for (let c = 0; c < image[r].length; c++) {
      let rgbArr = rgbStringToArray(image[r][c]);
      rgbArr[RED] = Math.min(255, rgbArr[RED] + 100);


      rgbArr = keepInBounds(rgbArr);


 
      image[r][c] = rgbArrayToString(rgbArr);
    }
  }
}


// TODO 6: Create more filter functions
function applyBlue() {
  for (let r = 0; r < image.length; r++) {
    for (let c = 0; c < image[r].length; c++) {
      let rgbArr = rgbStringToArray(image[r][c]);




      rgbArr[BLUE] = Math.min(255, rgbArr[BLUE] + 100);


      rgbArr = keepInBounds(rgbArr);


      image[r][c] = rgbArrayToString(rgbArr);
    }
  }
}

