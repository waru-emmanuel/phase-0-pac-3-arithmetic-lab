var a, b 
    a = Math.floor(Math.random() * 1000)
    b =  Math.floor(Math.random() * 1000)

  var a = parseFloat(prompt(`Enter first number: `));
  var b = parseFloat(prompt(`Enter first number: `));

  function add (a, b){
    return a+b;
  }
  function subtract (a, b){
    return a-b;
  }
  function divide (a, b){
    return a/b;
  }
    function multiply (a, b){
        return a*b;
    }   

    
    function increment(number){
        return (number += 1);
     }
     function decrement(number){
        return (number -= 1);
     }
     function makeInt(number){
        return number;
        
     }  
     function makeInt(number){
        var integer = parseInt(number,10); 
         return integer;
      }
        
     
      function preserveDecimal(number){
        var result = parseFloat(number);
        return result;
      }