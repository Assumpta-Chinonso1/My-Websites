  function Calculator(num1, num2, Operator) {
    let result;

  switch (Operator) {
    case '+':
        result = num1 + num2
        
        break;
          
        case '-':
        result = num1 - num2
        
        break;

        case '/':
        result = num1 / num2
        
        break;

        case '*':
        result = num1 * num2
        
        break;


  
    default:
        result = "Invalid Operator"
        break;
  }
    console.log(result);
    return result;

  }

  Calculator(5, 2, '*') // logs 10
