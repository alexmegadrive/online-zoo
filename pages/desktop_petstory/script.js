const htmlService = new HTMLService();
const petCardsArr = document.querySelectorAll('.card')
const petCardsNavBtn = document.querySelectorAll('.cards-btn')
const testimonialsArr = document.querySelectorAll('.testimonials-card__wrapper')
const navList = document.querySelector('#navList')
const menuToggle = document.querySelector('#menu-toggle')
const popup = document.querySelector('.popup')
const testimonialContainer = document.querySelector('.testimonials-cards-container')
const rangeSlider = document.querySelector('input[type="range"]');

// установка max value инпута при загрузке в зависимости от ширины экрана
changeRangeMax()


/* функционал Скролла блока Testimonials */
function changeRangeMax() {
    if (screen.width < 1381) {
        rangeSlider.max = 8
    } else rangeSlider.max = 7
}

window.addEventListener('resize', function(event) {
    changeRangeMax()
})

rangeSlider.addEventListener("input", scrollTestimonialsFunc);
function scrollTestimonialsFunc(){
    const testimonialCard = document.querySelector('.testimonials-card__card')
    const cardWidth = testimonialCard.offsetWidth
    // console.log('cardWidth :', cardWidth);
    const gap = 30;
    let value = rangeSlider.value;
    let transformXvalue = (cardWidth+gap)*value
    testimonialContainer.style.transform = `translateX(-${transformXvalue}px)`

  }

/* скрытие меню при клике на затемнение */
navList.addEventListener('click', function() {
  menuToggle.checked = false;
})


/* Функция и слушатель перелистывания карточек*/
petCardsNavBtn.forEach(el => el.addEventListener('click', event => showNextPetCards()))

function showNextPetCards() {
    let newRandomCardsArr = htmlService.randomArrGenerate(petCardsArr.length-1,6)
    console.log('newRandomCardsArr :', newRandomCardsArr);
    petCardsArr.forEach(el => htmlService.hideElement(el))
    for (let i=0; i<newRandomCardsArr.length; i++) {
    htmlService.showElement(petCardsArr[newRandomCardsArr[i]])
    }
}

/* Попап с отзывов*/

testimonialsArr.forEach(el => el.addEventListener('click', function() {
    popup.innerHTML = ''
    let popupContent = el.cloneNode(true); // клонировать сообщение
    let closeBtn = document.createElement('button')
    closeBtn.classList.add('popup-close-btn')
    popupContent.style.position = 'relative'
    popupContent.appendChild(closeBtn)
    popup.appendChild(popupContent)
    htmlService.showElement(popup)

   }) )

   window.onclick = function(event) {
    if (event.target == popup || event.target.classList.contains('popup-close-btn')) {
         popup.style.display = "none";
    }
}
