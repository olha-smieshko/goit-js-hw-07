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
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
      </li>
    `;
  }).join('');
}

/**** Створюю розмітку в html - Візуалізація галереї */
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

/**** Додаю слухач події на галерею - делегування подій кліку на зображенні зі списку на загальний елемент списку (ul)*/
gallery.addEventListener('click', openModal);

/**** Колбек функція слухача подій - відкриття модального вікна*/
function openModal(event) {
    /**** Скидаю дефолтну поведінку браузера - щоб посилання не відкривалось у новій вкладці*/
    event.preventDefault();
    /**** Дізнаюсь посилання на велике зображення картинки, на яку клікнули*/
    const largeImage = event.target.dataset.source;
    /**** Перевіряю, чи клік стався саме на зображенні*/
    if (!largeImage) {
        return;
    }
    /**** Створюю модальнре вікно, методами бібліотеки basicLightbox*/
    const modal = basicLightbox.create(`<img src="${largeImage}">`);
    /**** Відкриваю модальнре вікно, методами бібліотеки basicLightbox*/
    modal.show();
    /**** Функція закриття модального вікна по клавіші Escape*/
    const handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            modal.close();
        }
    };
    /**** Додаю слухач на клавішу клавіатури*/
    document.addEventListener('keydown', handleKeyDown);
}
