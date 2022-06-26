function squareDigits(num){
    let newNum = new Array();
      ('' + num).split('').map(n => {
        newNum.push(n**2);
       })
      
      return parseInt(newNum.join(''));
    }