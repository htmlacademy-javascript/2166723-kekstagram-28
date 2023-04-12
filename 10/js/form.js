import { resetScale } from './scale-control.js';
import { resetEffects } from './effects.js';

const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const VALID_COUNT_TEXT = 'Хештегов не может быть больше 5';
const VALID_UNIQUE_TEXT = 'Хэштеги должны быть уникальны и не могут повторяться';
const VALID_SIMBOLS_TEXT = 'Тег должен начинаться на # и содержать а-я, a-z, 0-9 и быть не длинее 20 символов';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const submitButton = document.querySelector('#upload-submit');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SIMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const createTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags;
};

const validateTagsCount = (value) => {
  const tags = createTags(value);
  return hasValidCount(tags);
};

const validateTagsUnique = (value) => {
  const tags = createTags(value);
  return hasUniqueTags(tags);
};

const validateTagsEvery = (value) => {
  const tags = createTags(value);
  return tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTagsCount,
  VALID_COUNT_TEXT
);

pristine.addValidator(
  hashtagField,
  validateTagsUnique,
  VALID_UNIQUE_TEXT
);

pristine.addValidator(
  hashtagField,
  validateTagsEvery,
  VALID_SIMBOLS_TEXT
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb (new FormData(form));
      unBlockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export {setOnFormSubmit, hideModal};
