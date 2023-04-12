const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = function (createData, container) {
  const getUserPicturesFragment = document.createDocumentFragment();
  container.querySelectorAll('.picture').forEach((element) => element.remove());

  createData.forEach(({url, likes, comments, description, id}) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__img').src = url;
    clonePictureTemplate.querySelector('.picture__img').alt = description;
    clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    clonePictureTemplate.dataset.thumbnailId = id;
    getUserPicturesFragment.appendChild(clonePictureTemplate);
  });

  container.appendChild(getUserPicturesFragment);
};

export {renderPictures};
