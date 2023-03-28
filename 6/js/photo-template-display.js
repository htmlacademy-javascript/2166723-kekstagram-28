const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = function (createData) {
  const getUserPicturesFragment = document.createDocumentFragment();

  createData.forEach(({url, likes, comments, description, id}) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__img').src = url;
    clonePictureTemplate.querySelector('.picture__img').alt = description;
    clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    clonePictureTemplate.dataset.thumbnailId = id;
    getUserPicturesFragment.appendChild(clonePictureTemplate);
  });

  const userPictures = document.querySelector('.pictures');
  userPictures.appendChild(getUserPicturesFragment);
};

export {renderPictures};
