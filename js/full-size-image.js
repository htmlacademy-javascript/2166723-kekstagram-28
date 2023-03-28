import {isEscapeKey} from './utils.js';


const fullSizeImage = document.querySelector('.big-picture');

const renderPictureDetails = ({url, likes, comments, avatar, name, message, description}) => {
  const imageCharacteristics = fullSizeImage.querySelector('.big-picture__img');
  imageCharacteristics.querySelector('img').src = url;
  fullSizeImage.querySelector('.likes-count').textContent = likes;
  fullSizeImage.querySelector('.comments-count').textContent = comments.length;

  fullSizeImage.querySelector('.social__comments img').src = avatar;
  fullSizeImage.querySelector('.social__comments img').alt = name;
  fullSizeImage.querySelector('.social__comments img').textContent = message;
  fullSizeImage.querySelector('.social__comments img').textContent = description;
};

const showBigPicture = (createData) => {
  fullSizeImage.classList.remove('hidden');
  fullSizeImage.querySelector('.social__comment-count').classList.add('hidden');
  fullSizeImage.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  renderPictureDetails(createData);

  const buttonCancel = fullSizeImage.querySelector('.big-picture__cancel');
  buttonCancel.addEventListener('ckick', (evt) => {
    evt.preventDefault();
    fullSizeImage.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      fullSizeImage.classList.add('hidden');
    }
  });
};

export {showBigPicture};
