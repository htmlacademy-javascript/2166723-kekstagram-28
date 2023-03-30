import {isEscapeKey} from './utils.js';

const fullSizeImage = document.querySelector('.big-picture');
const commentsLoader = fullSizeImage.querySelector('.comments-loader');
const COMMENTS_PER_PORTION = 5;
const commentList = fullSizeImage.querySelector('.social__comments');
const commentCount = fullSizeImage.querySelector('.social__comment-count');

const createComments = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

let commentsShown = 0;
let comments = [];

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComments(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count"> ${comments.length} </span> комментариев`;
};

const renderPictureDetails = ({url, likes, description}) => {
  const imageCharacteristics = fullSizeImage.querySelector('.big-picture__img');
  imageCharacteristics.querySelector('img').src = url;
  imageCharacteristics.querySelector('img').alt = description;
  fullSizeImage.querySelector('.likes-count').textContent = likes;
  fullSizeImage.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (createData) => {
  fullSizeImage.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  renderPictureDetails(createData);

  comments = createData.comments;
  if (comments.length > 0) {
    renderComments();
  }

  const buttonCancel = fullSizeImage.querySelector('.big-picture__cancel');
  buttonCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullSizeImage.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      fullSizeImage.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
};

export {showBigPicture};
