import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
/**** Функція для формування рядка розмітки галереї */
function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
      </li>
    `;
  }).join('');
}

/**** Створюю розмітку в html - Візуалізація галереї */
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
/**** Створюю модальнре вікно, методами бібліотеки SimpleLightbox*/
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});    
