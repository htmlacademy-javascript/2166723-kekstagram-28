import {isEscapeKey} from './utils.js';

const fullSizeImage = document.querySelector('.big-picture');
const fullSizeImageOpen = document.querySelector('.picture');
fullSizeImageOpen.addEventListener('click', (evt) => {
  evt.preventDefault();
  fullSizeImage.classList.remove('hidden');

  const inputData = function (createData) {
    createData.forEach(({url, likes, comments, avatar, name, message, description}) => {
      const imageCharacteristics = fullSizeImage.querySelector('.big-picture__img');
      imageCharacteristics.querySelector('img').src = url;
      fullSizeImage.querySelector('.likes-count').textContent = likes;
      fullSizeImage.querySelector('.comments-count').textContent = comments.length;
      const commentsList = fullSizeImage.querySelector('.social__comments');
      commentsList.querySelector('.social__picture').src = avatar;
      commentsList.querySelector('.social__picture').alt = name;
      commentsList.querySelector('.social__text').textContent = message;
      fullSizeImage.querySelector('.social__caption').textContent = description;
    });
  };
});

// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
fullSizeImage.querySelector('.social__comment-count').classList.add('hidden');
fullSizeImage.querySelector('.comments-loader').classList.add('hidden');
// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
document.querySelector('body').classList.add('modal-open');
// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
document.addEventListener('keydown', (evt) =>{
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullSizeImage.classList.add('hidden');
  }
});
// Подключите модуль в проект.
