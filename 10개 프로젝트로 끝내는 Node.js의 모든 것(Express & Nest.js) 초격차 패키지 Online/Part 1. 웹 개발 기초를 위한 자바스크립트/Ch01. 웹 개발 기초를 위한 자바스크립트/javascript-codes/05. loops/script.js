// // for
// // 코드 블록을 여러 번 반복 합니다.
// for(i = 0; i < 10; i++){
//     if(i === 3){
//         console.log("It is 3");
//         continue;
//     };
//     if(i === 5){
//         console.log("5 stop to the loop");
//         break;
//     };
//     console.log("Number is " + i);
// }

// // for/in
// // 객체의 속성(property)을 따라 반복합니다.
// const user = {
//     name: "Han",
//     province: "경기도",
//     city: "성남시",
// };

// for(x in user){
//     console.log(`${x}: ${user[x]}`);
// };

// // while
// // 지정된 조건이 true 인 동안 코드 블록을 반복
// let i = 0;
// while(i < 10){
//     console.log("Number " + i);
//     i++;
// };

// do/while
// do/while 루프는 while 루프의 변형입니다.
// 이 루프는 조건이 true 인지 검사하기 전에, 코드 블록을 한 번 실행합니다.
// 그러고 나서 조건이 true 인 동안 루프를 반복합니다.
let i = 0;
do{
    console.log("Number " + i);
    i++;
}
while(i<10);