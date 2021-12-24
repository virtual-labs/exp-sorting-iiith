"use strict";

const sleep = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

let arr = [];

const button_insertionSort = document.getElementById("insertion-sort");
const button_quickSort = document.getElementById("quick-sort");
const button_mergeSort = document.getElementById("merge-sort");
const button_clear = document.getElementById("clear");
const button_push = document.getElementById("push");
const ans = document.getElementById("answer-container");

const updateArray = () => {
  if (arr.length === 0) {
    ans.style.display = "none";
  }
  for (let i = 0; i < arr.length; i++) {
    let curBox = document.getElementById("el" + i.toString());
    curBox.innerHTML = arr[i];
  }
};

const colorElement = async (i, color = "green") => {
  let eleDiv = document.getElementById("el" + i.toString());
  eleDiv.style.backgroundColor = color;
};

const insertionSort = async () => {
  let curElement;
  for (let i = 1; i < arr.length; ++i) {
    curElement = arr[i];
    let j = i - 1;
    // colorElement(i, "#00ff00");
    // colorElement(j, "#00ff00");
    while (j >= 0 && arr[j] > curElement) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = curElement;
    updateArray();
    await sleep(1);
    // colorElement(i, "#00ff00");
    // colorElement(j, "#00ff00");
    await sleep(1);
  }
};

const quickSort = async () => {
  let swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  };

  let partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  };

  let sort = async (items, left, right) => {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        await sort(items, left, index - 1);
        updateArray();
      }
      if (index < right) {
        //more elements on the right side of the pivot
        await sort(items, index, right);
        updateArray();
      }
      updateArray();
    }
    return items;
  };

  await sort(arr, 0, arr.length - 1);
  updateArray();
};

const mergeSort = () => {
  const merge = (left, right) => {
        let temp_arr = [];
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
          // Pick the smaller among the smallest element of left and right sub arrays
          if (left[0] < right[0]) {
            temp_arr.push(left.shift());
          } else {
            temp_arr.push(right.shift());
          }
        }

        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
      updateArray();
      return [...temp_arr, ...left, ...right];
  }

  const sort = (array) => {
    const half = array.length / 2;

    // Base case or terminating case
    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half);
    return merge(sort(left), sort(array));
  }

  arr = sort(arr);
  updateArray();
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
  if (!inputBox.value) {
    return;
  }
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
});

button_quickSort.addEventListener("click", () => {
  quickSort();
});

button_mergeSort.addEventListener("click", () => {
  mergeSort();
});

button_clear.addEventListener("click", () => {
  arr = [];
  let parent = document.getElementById("val-1");
  parent.innerHTML = "";
  updateArray();
});
