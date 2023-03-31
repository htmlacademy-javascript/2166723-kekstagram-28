import {isEscapeKey} from './utils.js';
const COMMENTS_PER_PORTION = 5;

const fullSizeImage = document.querySelector('.big-picture');
const commentsLoaderButton = fullSizeImage.querySelector('.comments-loader');
const commentList = fullSizeImage.querySelector('.social__comments');
const commentCount = fullSizeImage.querySelector('.social__comment-count');

const createComments = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  const imageComment = document.createElement('img');
  imageComment.classList.add('social__picture');
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');

  imageComment.src = avatar;
  imageComment.alt = name;
  textComment.textContent = message;
  comment.appendChild(imageComment);
  comment.appendChild(textComment);

  return comment;
};

let commentsShown = 0;
let comments = [];

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
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
    commentsShown = 0;
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      fullSizeImage.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      commentsShown = 0;
    }
  });
};

commentsLoaderButton.addEventListener ('click', () => {
  renderComments();
});


commentsLoaderButton.removeEventListener ('click', () => {
  renderComments();
});

export {showBigPicture};
