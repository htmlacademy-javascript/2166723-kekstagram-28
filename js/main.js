import {renderGallerey} from './gallarey.js';
import {getData, sendData} from './api.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showAlert, debounce} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {init, getFilteredPictures} from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

// try {
//   const data = await getData();
//   renderGallerey(data);
// } catch (err) {
//   showAlert(err.message);
// }

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallerey);
  init(data, debouncedRenderGallery);
  renderGallerey(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
