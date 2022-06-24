function getSum(a, b) {
    let lower, higher;
      let result = 0;
      //return either of it if they are equal
      if(a == b) {
          return a;
      } else {
          if(a > b) {
              higher = a;
              lower = b;
          } else {
              higher = b;
              lower = a;
          }
          for(i = lower; i <= higher; i++) {
              result += i;
          }
      }
      return result;
    //Good luck!
  }