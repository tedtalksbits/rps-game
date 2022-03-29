// add
let score = parseInt(window.localStorage.getItem("score"));
export function updateScore(num) {
  window.localStorage.setItem("score", num);
  //   if (score < 0) {
  //     window.localStorage.setItem("score", 0);
  //   }
}
