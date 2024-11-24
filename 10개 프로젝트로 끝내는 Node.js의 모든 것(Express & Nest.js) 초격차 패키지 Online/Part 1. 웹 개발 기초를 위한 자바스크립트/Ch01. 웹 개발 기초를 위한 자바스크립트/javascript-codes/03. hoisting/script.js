/* 
호이스팅(Hoisting)
    - 호이스트(hoist)의 뜻은 무언가를 들어 올리거나 끌어 올리는 동작을 설명합니다.
    자동차를 강에서 올린다(hoist)라고 할 수 있습니다.
    - JavaScript에서 호이스팅은 코드가 실행되기 전에 변수 및 함수 선언(이름)이 
    로컬 범위(유효 범위)의 맨 위로 들어올려지거나 끌어올려지는 경우를 설명합니다. 
*/

/* 
var 선언문 호이스팅
    - 아래 예에서는 아직 생성하지 않은 변수에 대한 콘솔로그를 사용하여 시작합니다.
    다음으로 greeting이라는 변수를 선언하고 문자열 hello를 할당합니다. 
    코드가 실행되면 undefined가 반환됩니다.

    - 이 코드가 에러를 발생시키지 않는 이유는 호이스팅 때문입니다.
    JavaScript 인터프리터는 변수 생성의 선언(var greeting) 단계 및 할당( = 'hello') 단계를 분할합니다.
    선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅되고 초기에 undefined값을 할당합니다.
    즉, 초기화되기 전에 greeting 변수를 사용할 수 있습니다. 
*/

/* console.log(greeting);
// undefined
// var greeting = 'hello';
let greeting = 'hello'; */

func();
function func(){
    console.log('hoisting test');
};

/* 
let / const 선언문 호이스팅
    - let 또는 const로 변수를 선언하면 실제로 변수는 여전히 호이스팅됩니다.
    그러나 차이점은 var와 차이점은 var는 실제 할당 값이 할당되기전 까지 undefined 값이 할당됩니다.

    하지만 let/const를 사용하면 변수 초기에 어떤 값도 할당되지 않습니다. 
*/

console.log(greeting);
const greeting = 'hello';

/* 
    - 이번에도 호이스팅은 되지만 변수는 초기에 undefined로 초기화된 var와 달리 초기에 초기화되지 않습니다. 
    코드가 실행(실행)되면 변수에 값을 할당하기 전에 콘솔 로그가 발생하므로 위의 오류가 발생합니다. 
    const로 변수를 선언하는 것도 같은 방식으로 작동합니다.

    - 이러한 일이 발생하는 이유를 TDZ(Temporal Dead Zone)이라고 합니다. 
    일시적 데드 존은 변수를 사용할 수 없는 일시적인 비활성 상태를 나타냅니다. 
*/

/* 
let / var / const 결론
    - 변수를 생성할 때 재할당이 필요없다면 const를 사용합니다.
    - 재할당이 필요하면 let 을 사용하지만 변수의 scope를 최대한 좁게 만들어서 사용해줍니다. 
*/