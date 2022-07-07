// switch

function calculate (number1, operator, number2){
   let result



   switch(operator){
      case '+':
         //código
         result = number1 + number2
         break
      case '-':
         //código expressao b
         result = number1 - number2
         break
      case '*':
         //código expressao b
         result = number1 * number2
         break
      case '/':
         //código expressao b
         result = number1 / number2
         break
      default:
         console.log('não implementado')
         break
   }

   return result
}

console.log(calculate(10 , '*' , 5))