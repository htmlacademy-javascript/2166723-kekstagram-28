import {renderGallerey} from './gallarey.js';
import {getData, sendData} from './api.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showAlert} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallerey(data);
} catch (err) {
  showAlert(err.message);
}
