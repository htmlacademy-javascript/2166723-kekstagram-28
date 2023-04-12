const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadImageButton = document.querySelector('.img-upload__input');
const previewImage = document.querySelector('.img-upload__preview img');

uploadImageButton.addEventListener('change', () => {
  const file = uploadImageButton.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    previewImage.src = URL.createObjectURL(file);
  }
});
