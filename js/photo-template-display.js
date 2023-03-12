import {getPictures} from './create-data.js';

const pictureTemplate = document.querySelector('#picture');
pictureTemplate.content.querySelector('.picture');

const getUserPictures = getPictures();

const getUserPicturesFragment = document.createDocumentFragment();

getUserPictures.forEach(({url, likes, comments}) => {
  const clonePictureTemplate = pictureTemplate.cloneNode(true);
  clonePictureTemplate.querySelector('.picture__img').src = url;
  clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
  clonePictureTemplate.querySelector('.picture__comments').textContent = comments;
  getUserPicturesFragment.appendChild(clonePictureTemplate);
});

const userPictures = document.querySelector('.pictures');
userPictures.appendChild(getUserPicturesFragment);

