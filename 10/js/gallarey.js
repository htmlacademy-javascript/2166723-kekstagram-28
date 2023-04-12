import {renderPictures} from './photo-template-display.js';
import {showBigPicture} from './full-size-image.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  showBigPicture(picture);
};

const renderGallerey = (currentPictures) => {
  pictures = currentPictures;
  renderPictures(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export {renderGallerey};
