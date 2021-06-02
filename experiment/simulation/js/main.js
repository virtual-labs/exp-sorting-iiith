"use strict"

const sleep = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

let arr = [];

const button_insertionSort = document.getElementById("insertion-sort");
const button_push = document.getElementById("push");
const ans = document.getElementById("answer-container");

const updateArray = () => {
    for (let i = 0; i < arr.length; i++){
        let curBox = document.getElementById("el" + i.toString())
        curBox.innerHTML = arr[i]
    }
}

const colorElement = async (i, color="green") => {
  let eleDiv = document.getElementById('el' + i.toString())
  eleDiv.style.backgroundColor = color;
}

const insertionSort = async () => {
  let curElement;
  for (let i = 1; i < arr.length; ++i){
    curElement = arr[i]
    let j = i - 1;
    colorElement(i, "#00ff00");
    colorElement(j, "#00ff00");
    while (j >= 0 && arr[j] > curElement) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = curElement
    updateArray();
    await sleep(1);
    colorElement(i, "#00ff00");
    colorElement(j, "#00ff00");
    await sleep(1);
    colorElement(i, "transparent");
    colorElement(j, "transparent");
  }
}

const addNumber = (number) => {
  if (arr.length > 9) {
    alert("Reach array limit");
    return;
  }
  let parent = document.getElementById("val-1");
  let tempDiv = document.createElement("div");
  tempDiv.id = "el" + arr.length.toString();
  arr.push(number);
  tempDiv.innerHTML = number;
  tempDiv.classList.add("custom-cell");
  parent.append(tempDiv);
};

button_push.addEventListener("click", () => {
  ans.style.display = "flex";
  let inputBox = document.getElementById("in1");
  if (inputBox.value.length > 4) {
    alert("Please enter only upto 4 digit number");
    inputBox.value = "";
    return;
  }
  addNumber(parseInt(inputBox.value));
  inputBox.value = "";
});

button_insertionSort.addEventListener("click", () => {
  insertionSort();
})