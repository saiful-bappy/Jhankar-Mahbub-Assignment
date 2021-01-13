/********** feetToMile Area Start *************/

function feetToMile(feet) {
  if (feet < 0) {
    var mile = "Distence cannot be negetive.";
  } else {
    var mile = feet / 5280;
  }
  return mile;
}

/********** feetToMile Area End *************/

/********** woodCalculator Area Start *************/

function woodCalculator(numOfChair, numOfTable, numOfBed) {
  var totalCubicFeet = numOfChair * 1 + numOfTable * 3 + numOfBed * 5;

  return totalCubicFeet;
}

/********** woodCalculator Area End *************/

/********** brickCalculator Area Start *************/

function brickCalculator(n) {
  var error = "";
  if (n < 0) {
    error = "\nError: You Entered " + n + " Which is Nagative value. We are Considering " + n + " as " +
            Math.abs(n) + ". \n\nThe Total Brick You Need for " + Math.abs(n) + " Level Building is ";
    
    n = Math.abs(n); 
    return error + calculation() + "\n";
  } else {
    return calculation();
  }

  function calculation() {
    if (n <= 10) {
      var takesBrick = n * 15 * 1000;
    } else if (n <= 20) {
      var takesBrick = ((n - 10) * 12 + 150) * 1000;
    } else if (n <= 45) {
      var takesBrick = ((n - 20) * 10 + 270) * 1000;
    } else {
      var takesBrick = "Illegal Building - The Building Will be Broken";
    }

    return takesBrick;
  }
}

/********** brickCalculator Area End *************/
