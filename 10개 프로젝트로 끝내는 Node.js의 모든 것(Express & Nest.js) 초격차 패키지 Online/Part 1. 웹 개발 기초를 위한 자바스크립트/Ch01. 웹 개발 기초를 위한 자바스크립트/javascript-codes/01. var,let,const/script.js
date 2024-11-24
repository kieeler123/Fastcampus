/* 
var

아래와 같이 중복 선언과 재할당이 가능하며 마지막에 할당된 값이 변수에 저장됩니다.

이런 특징으로 인해 자율성은 생기지만 소스코드가 복잡해진 경우 
기존 선언해둔 변수를 잊고 다시 선언하거나 재할당을 해서 
어떤 부분에서 같이 변경되는지 파악하기 힘들어지게 될 수 있습니다. 
*/

/* var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you?';
console.log(greeting); */

/* 
let

아래와 같이 중복선언은 불가하며 재할당은 가능합니다. 
*/

/* let greeting = 'hello';
console.log(greeting);

// let greeting = 'hi';
// console.log(greeting);

greeting = 'hi';
console.log(greeting); */

/* 
const

아래와 같이 중복선언과 재할당 모두 불가능합니다. 
*/

/* const greeting = 'hello';
console.log(greeting);

const greeting = 'hi';
console.log(greeting);

greeting = 'hi';
console.log(greeting); */