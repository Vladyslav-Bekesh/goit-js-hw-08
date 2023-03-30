import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
//! gallery find
const gallery = document.querySelector('.gallery');

//! markup create
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

//! event listener

gallery.addEventListener('click', openBigImage);

//! functions

function openBigImage(event) {
  event.preventDefault();
  const element = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
}
