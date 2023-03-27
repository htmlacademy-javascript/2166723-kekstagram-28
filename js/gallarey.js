import {renderPictures} from './photo-template-display.js';
import {showBigPicture} from './full-size-image.js';

const container = document.querySelector('.pictures');

const renderGallerey = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  renderPictures(pictures, container);
};

export {renderGallerey};
