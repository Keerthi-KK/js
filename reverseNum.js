// //         1.  Reversal of number using string method
// function revNum(no){
//     let n =no.toString();

//     const number=[];
//     let output="";

//     for(let i=n.length-1,k=0;i>=0;i--,k++){
//         number[k]=n[i];
//         output=output+number[k];
//     }
// return parseInt(output);
// }
// console.log(revNum(5678));


//      2. reversal using inbuilt functions

// let num = 5678;
// let revNum = num.toString();
// revNum = revNum.split("").reverse().join("");
// console.log(revNum);

//       3. using logic

// let num = 123456;
// let revNum = 0;
// let lastDigit;

// while(num!=0){
//     lastDigit = num % 10;
//     revNum =revNum*10 + lastDigit;
//     num =Math.floor(num/10);
// }
// console.log(revNum);



//  4. Decimal values reversal

function revNum(num) {
    var reversed = 0;  
    var exponent = num.toString().indexOf('.');
   
    if (exponent !== -1) {
     num *= Math.pow(10, num.length - exponent - 1);
    }
    while (num != 0) {
      reversed *= 10;
      reversed += num % 10;
      num -= num % 10;
      num /= 10;
    }
   
    if (exponent !== -1) {
     reversed /= Math.pow(10, exponent);
    }
   
    return reversed;
   }
console.log(revNum('12584.3456'));