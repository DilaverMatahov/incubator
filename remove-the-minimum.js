function removeSmallest(numbers) {
    //make a copy of the original array without mutation 
     const copy = numbers.slice(0)
  //find the smallest value in the array 
   let smallestValue = numbers.indexOf(Math.min(...numbers))
  //Remove the smallest element in the array 
   copy.splice(smallestValue, 1);
  //Return the array without the smallest element
  return copy;
  }