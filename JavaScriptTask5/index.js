// 1. "button.change-color" düyməsinə klik edildikdə <body> elementinin fon rənglərini dəyişən bir
// skript yazın və span.color'da rəng dəyərini göstərin.

// const button = document.querySelector(".change-color");
// const colorName = document.querySelector(".color");

// function getRandomHexColor() {
//   const randomColor =
//     "rgb(" +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     ")";
//   document.body.style.backgroundColor = randomColor;
//   colorName.textContent = randomColor;
// }

// button.addEventListener("click", function () {
//   getRandomHexColor();
// });

// 2. Sadə bir kalkulyator yaradın ki, onda rəqəmlər və əməliyyatlar üçün düymələr olsun.
// İstifadəçinin klikləri ilə daxil etdiyi rəqəmləri və əməliyyatların nəticəsini göstərin.

// const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// 3. Əkrana genişlik və hündürlük bütün sahəni tutan bir futbol meydanı ilə 100x100 piksel
// ölçülərində bir top olan bir HTML səhifə yaradın. Səhifəyə klik etdikdə, topun mərkəzi klik
// edilən yerdə dayansın və top sahənin sərhədlərindən kənarda olmasın.
// Modal container element
const modalContainer = document.querySelector(".modal-container");

function showModal(x, y) {
  const modalWidth = modalContainer.offsetWidth;
  const modalHeight = modalContainer.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const modalLeft = Math.max(0, x - modalWidth / 2);
  const modalTop = Math.max(0, y - modalHeight / 2);

  modalContainer.style.left = `${modalLeft}px`;
  modalContainer.style.top = `${modalTop}px`;
  modalContainer.style.display = "flex";
}

function hideModal() {
  modalContainer.style.display = "none";
}

document.addEventListener("click", (event) => {
  showModal(event.clientX, event.clientY);
});

modalContainer.addEventListener("click", hideModal);
