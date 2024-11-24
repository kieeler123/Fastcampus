// 유효한 참조범위(scope)

/* var 함수 레벨 스코프(function-level-scope)
    - 아래와 같이 함수 내에서 선언된 변수는 함수 내에서만 유효합니다.
    (함수 내에서는 블록 내외부에 관계없이 유효합니다.)
    - 하지만 함수 외부에서는 참조할 수 없습니다. */

// function func () {
//     if(true){
//         var a = 'a';
//         console.log(a);
//     };
//     console.log(a);
// };
// console.log(a);
// func();

/* let/const 블록 레벨 스코프(block-level-scope)
    - 함수, if문, for문, try/catch문 등의 모든 코드 블록 내부에서 선언된 변수는 코드 블록 내에서만 유효하며 
    코드 블록 외부에서는 참조할 수 없습니다. */

function func(){
    if(true){
        let a = 'a';
        console.log(a);
    };
    // console.log(a);
};
func();

function func(){
    if(true){
        const a = 'a';
        console.log(a);
    };
    // console.log(a);
};
func();