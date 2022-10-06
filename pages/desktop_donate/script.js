const amountInputBox = document.querySelector('#inputSumBox')
const navList = document.querySelector('#navList')
const menuToggle = document.querySelector('#menu-toggle')
const amountInputRadioArr = document.querySelectorAll('input[name="donate-amount"]');


/* скрытие меню при клике на затемнение */
navList.addEventListener('click', function() {
  menuToggle.checked = false;
  console.log('1')
})


 /* Выделение радио кнопок с суммами при вводе в Input */

amountInputBox.addEventListener('input',
 event => {
  amountInputRadioArr.forEach(el => el.checked = false)
  for (i=0;i<amountInputRadioArr.length;i++){
    if (event.target.value == amountInputRadioArr[i].value) {
      amountInputRadioArr[i].checked = true;
    } }
 })

 amountInputRadioArr.forEach(el => el.addEventListener('click', function() {
  amountInputBox.value = el.value;
  // console.log('value :', value);

 }) )


function checkNum(e) {
    e = e || window.event;
    let charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    console.log('e.keyCode :', e.keyCode);
    let charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/))  e.preventDefault();
  }