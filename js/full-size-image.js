import {isEscapeKey} from "./utils.js";

// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:
const fullSizeImage = document.querySelector('.big-picture');
fullSizeImage.classList.remove('hidden');
// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
const imageCharacteristics = fullSizeImage.querySelector('.big-picture__img');
imageCharacteristics.querySelector('img').src = url;
// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
fullSizeImage.querySelector('.likes-count').textContent = likes;
// Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.
fullSizeImage.querySelector('.comments-count').textContent = comments.length;
// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
//Разметка каждого комментария должна выглядеть так:
const commentsList = fullSizeImage.querySelector('.social__comments');

const renderCommentItem = function (createData) {
  const commentItemFragment = document.createDocumentFragment();

  createData.forEach(({avatar, name, message}) => {
    commentsList.querySelector('.social__picture').src = avatar;
    commentsList.querySelector('.social__picture').alt = name;
    commentsList.querySelector('.social__text').textContent = message;
    commentItemFragment.appendChild(commentsList);
  });
};


// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>
// Описание фотографии description вставьте строкой в блок .social__caption.
fullSizeImage.querySelector('.social__caption').textContent = description;
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

