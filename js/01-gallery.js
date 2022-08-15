import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// В файле gallery-items.js есть массив galleryItems, который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание. Мы уже подключили его к каждому из JS-файлов проекта.
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// вытащили див галерии
const refs = {
   gallery: document.querySelector(".gallery"),
};

// создали и зарендерили разметку (пример в колорпикере)
function createImagesGallery(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
         return `
      <div class="gallery__item">
         <a class="gallery__link" href='${original}'>
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
            />
         </a>
         </div>
         `;
      }).join("");
}
const listGallery = createImagesGallery(galleryItems);
// console.log(listGallery);


// ....Реализация делегирования на div.gallery
// добавили разметку в див
refs.gallery.innerHTML = listGallery;

// ....Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// ...Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
   // ...Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
   event.preventDefault();

   // поставили проверку, чтобы если будут кликать куда-то вне наших изображений, сразу же выходило и ничего не выполняло
   if (event.target.nodeName !== "IMG") {
      return;
   }

   
   const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

   
   instance.show();

   // ...Добавь закрытие модального окна по нажатию клавиши Escape.
   // ...Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.У библиотеки basicLightbox есть метод
   // при нажатии на клавиатуру повесили слушателя
   refs.gallery.addEventListener("keydown", onCloseEscButton);

   // это функция для закрытия модального окна
   function onCloseEscButton(event) {
      console.log(event.code)
      // проверяем нажата ли Escape и если да, закрываем модалку и удаляем слушателя с keydown
      if (event.code === "Escape") {
         instance.close();
         refs.gallery.removeEventListener("keydown", onCloseEscButton);

      }
}
}
