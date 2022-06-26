var countBits = function(n) {
    const base = (n).toString(2).split('');
     
     // make a sum with the array and make the index a Number
     const result = base.reduce((sum, num) => sum + Number(num), 0);
     
     return result;
  };