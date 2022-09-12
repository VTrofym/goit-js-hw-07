import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


// 2. Зарендерил в DIV
const galleryContainer = document.querySelector('.gallery')
// console.log(galleryContainer)
const itemsMarkup = createGalleryItems(galleryItems)
// console.log(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup)
// console.log(createGalleryItems(galleryItems))

// 3.
galleryContainer.addEventListener('click', onGalleryContainerClick)


// 1. создание разметки в JS
function createGalleryItems(galleryItems) {
  return galleryItems.map(item => {
    return `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.preview}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>
`;
  }).join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault()
  if (evt.target.tagName !== 'IMG') {
    return
  }
const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
  instance.show()
  // console.log(evt.target)
}







