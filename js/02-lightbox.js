import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryEl = document.querySelector('.gallery');
const markupGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupGallery);

galleryEl.addEventListener('click', targetClickHandler);

function targetClickHandler(event) {
    event.preventDefault();
}
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData:   'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryItemsMarkup(items) {
  const galleryItemsMarkup = items.map(({ preview, original, description }) => `<a class="gallery__item" href='${original}'>
    <img class='gallery__image'
    src='${preview}'
    alt='${description}'
    />
    </a>`
  ).join('');
  return galleryItemsMarkup;
}