import {getPictures} from './create-data.js';

getPictures();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createData = getPictures();

const getUserPicturesFragment = document.createDocumentFragment();

createData.forEach(({url, likes, comments, description}) => {
  const clonePictureTemplate = pictureTemplate.cloneNode(true);
  clonePictureTemplate.querySelector('.picture__img').src = url;
  clonePictureTemplate.querySelector('.picture__img').alt = description;
  clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
  clonePictureTemplate.querySelector('.picture__comments').textContent = comments.length;
  getUserPicturesFragment.appendChild(clonePictureTemplate);
});

const renderPictures = function () {
  const userPictures = document.querySelector('.pictures');
  userPictures.appendChild(getUserPicturesFragment);
};

export {renderPictures};
