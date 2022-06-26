function validatePIN (pin) {
    const checkLength = pin.length === 4 || pin.length === 6;
  
    const numMatch = /^[0-9]/g
    
    if (checkLength && pin.match(numMatch)){  
      return true;
    }  
    
    return false;
    }