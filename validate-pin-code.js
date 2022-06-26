function validatePIN (pin) {
    const checkLength = pin.length === 4 || pin.length === 6;
   
   const numMatch = /^[0-9]/g
   var er = /^-?[0-9]+$/;
   if(er.test(pin)){
   if (checkLength && pin.match(numMatch)){
   return true;
   }
   }
   return false;
     }