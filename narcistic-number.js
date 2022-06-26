function narcissistic(value) {
    let valString = value.toString().split('');
    
       let integerSet = valString.map((item)=>{
        return Number(item);
       })
      
       let keyFunc = function powerCalc(test){
         let a = test.length;  // <------- "raised to the power of the number of digits"
         return test.map((item)=>{
           return Math.pow(item, a);
         }).reduce((total, item)=>{
           return total + item;
         }, 0);
       }
   
       // console.log(keyFunc(153)); // <-- This was throwing an error
   
       if(keyFunc(integerSet)==value){
          return true;
        }
       else {
          return false;
        }
   }
