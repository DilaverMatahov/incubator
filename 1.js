function squareDigits(num){
  let number = '' + num;
  let newNum = new Array();
  number.split('').map(n => {
    newNum.push(n**2);
  })
  
  return parseInt(newNum.join(''));
}
