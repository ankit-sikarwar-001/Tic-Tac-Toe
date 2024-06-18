let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  for (const res of boxes) {
    res.innerText = " ";
    enablebos();
  }
});
let turnO = true;
let winning_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let enablebos = () => {
  for (const bxx of boxes) {
    bxx.disabled = false;
  }
};
let disablebos = () => {
  for (const bxx of boxes) {
    bxx.disabled = true;
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");
    if (turnO) {
      box.innerText = " X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
function checkwinner() {
  for (let pattern of winning_pattern) {
    console.log(pattern);
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      console.log(pattern[0], pattern[1], pattern[2]);
      console.log(val1, val2, val3);

      if (val1 === val2 && val2 === val3) {
        document.querySelector("audio").play();
        let winner = document.querySelector("p");
        winner.innerText = `Winner is ${val1}`;
        winner.classList.remove("msgh");
        console.log("winner");
        disablebos();
      }
    }
  }
}
