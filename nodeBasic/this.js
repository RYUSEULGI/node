console.log(this);
console.log(this === module.exports);
console.log(this === exports);

// 함수 식
// 화살표 함수의 this는 바로 상위 스코프의 this와 같다.
const whatIsThis = () => {
    console.log('function', this === exports, this === global);
};

// 함수 선언문
// this = 전역
function whatIsThis2() {
    console.log('function', this === exports, this === global);
}

whatIsThis();
whatIsThis2();
