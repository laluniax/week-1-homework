// 11. 현재 시간에 따라 다른 콘솔이 찍히도록 조건문을 작성해보세요
// 현재 시간이 오전 10시 전인 경우 “good morning”이 콘솔에 찍히도록 작성합니다.
// 현재 시간이 오전 10시 ~ 오후 6시 사이인 경우 “good afternoon”이 콘솔에 찍히도록 작성합니다.
// 현재 시간이 저녁 6시 이후(18시)인 경우 “good evening”이 콘솔에 찍히도록 작성합니다.
// 자바스크립트에서 시간을 어떻게 가져올 수 있는지 직접 검색해보세요.

//현재 날짜 구하기
let date = new Date();
//new => 객체를 만들어냄

//현재 시간 구하기
let hours = date.getHours();

//현재 분 구하기
let minuate = date.getMinutes();

if (hours < 10) {
  //현재 시간이 오전 10시 전인 경우
  console.log("good morning !");
  // 현재 시간이 오전 10시 ~ 오후 6시 사이인 경우
} else if ((hours >= 10, hours <= 18)) {
  console.log("good afternoon !");
  //현재 시간이 저녁 6시 이후(18시)인 경우
} else {
  console.log(" good evening !");
}
