// Code your solution in this file!


// Write your code in this file!

function distanceFromHqInBlocks(distance){
    if(distance > 42){
        return distance - 42;
    } else {
        return 42 - distance;
    }
  }
  
  function distanceFromHqInFeet(distanceInFeet){
    return distanceFromHqInBlocks(distanceInFeet)*264
  }
  
  function distanceTravelledInFeet(start, destination){
    if(start < destination){
      return (destination - start)*264;
    } else {
      return (start - destination)*264;
    }
  }
  
  function calculatesFarePrice (start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance <= 400){
        return farePrice = 0;
    }
    
        else if (distance >= 400 && distance <= 2000){
            return farePrice= 2.56;
        }
        else if (distance >= 2000 &&distance <= 2500){
            return farePrice = 25;
        }
        else {
            return farePrice = "cannot travel that far";
        }
    }