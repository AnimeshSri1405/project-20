function isTouching(ob1,ob2){
    if(ob1.x-ob2.x < (ob1.width/2 + ob2.width/2)
    && ob2.x-ob1.x < (ob1.width/2 + ob2.width/2)
      && ob1.y-ob2.y < (ob1.width/2 + ob2.width/2)
      && ob2.y-ob1.y < (ob1.width/2 + ob2.width/2))
    {
      console.log("touching")
     return true;
    }
    else{
      return false;
    }
  }
  function multiply(num1,num2){
  return num1 * num2
  }