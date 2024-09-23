// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector('.gallery')

galleryItems.map(item => {
    list.insertAdjacentHTML('beforeend', `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`)
});


new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250
 });