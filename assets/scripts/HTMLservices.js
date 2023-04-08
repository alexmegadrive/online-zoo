"use strict";

class HTMLService {
  showElement(element) {
    element.classList.remove("hidden");
  }
  hideElement(element) {
    element.classList.add("hidden");
  }
  randomArrGenerate(max, total) {
    let result = [];
    for (let i = 0; i < total; i++) {
      let newEl = Math.round(Math.random() * (max - 1) + 1);
      while (result.includes(newEl) == true) {
        newEl = Math.round(Math.random() * (max - 1) + 1);
      }
      result.push(newEl);
    }
    return result;
  }
}
