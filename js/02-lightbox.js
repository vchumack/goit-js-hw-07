import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.
// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.


// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

// вытащили ul галереи
const refs = {
   gallery: document.querySelector(".gallery"),
};

// создали и зарендерили разметку 

function createImagesGallery(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
         return `
      <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a >
         `;
      }).join("");
}
const listGallery = createImagesGallery(galleryItems);
console.log(listGallery);

// добавили разметку в ul
refs.gallery.innerHTML = listGallery;

// ...Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
refs.gallery.addEventListener("click", onGalleryClick);


function onGalleryClick(event) {
   event.preventDefault();
 
   var lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,

});
}
