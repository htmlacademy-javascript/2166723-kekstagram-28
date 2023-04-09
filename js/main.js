import {getPictures} from './create-data.js';
import {renderGallerey} from './gallarey.js';
import './form.js';

const createData = getPictures();

renderGallerey(createData);
