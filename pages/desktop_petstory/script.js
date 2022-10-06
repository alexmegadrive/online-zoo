const htmlService = new HTMLService();
const petCardsArr = document.querySelectorAll('.card')
const petCardsNavBtn = document.querySelectorAll('.cards-btn')
const navList = document.querySelector('#navList')
const menuToggle = document.querySelector('#menu-toggle')


/* скрытие меню при клике на затемнение */
navList.addEventListener('click', function() {
  menuToggle.checked = false;
//   console.log('1')
})


petCardsNavBtn.forEach(el => el.addEventListener('click', event => showNextPetCards()))

function showNextPetCards() {
    let newRandomCardsArr = htmlService.randomArrGenerate(9,6)
    console.log('newRandomCardsArr :', newRandomCardsArr);
    petCardsArr.forEach(el => htmlService.hideElement(el))
    for (let i=0; i<newRandomCardsArr.length; i++) {
    htmlService.showElement(petCardsArr[newRandomCardsArr[i]])
    }
}



// outer html


// let div2 = div.cloneNode(true); // клонировать сообщение
//   div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент

//   div.after(div2); // показать клонированный элемент после существующего div
