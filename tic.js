let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn = true;
let winning_pattern = [[0, 1, 2]];

box.forEach((val) => {
  val.addEventListener("click", () => {
    if (turn) {
      val.innerText = " X";
      turn = false;
      val.disabled = true;
    } else {
      val.innerText = "O";
      turn = true;
    }
  });
});
