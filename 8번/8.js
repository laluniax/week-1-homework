// 버튼 누르면 Prompt 창 띄우기
document.querySelector(".btn").addEventListener("click", function () {
  let 프롬프트 = prompt("왜 누르셨습니까?");
  //prompt에 입력한 결과 alert 창에 띄우기
  return alert(프롬프트);
});
