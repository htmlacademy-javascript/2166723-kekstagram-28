import {getPictures} from './create-data.js';
import {renderPictures} from './photo-template-display.js';
import {renderGallerey} from './gallarey.js';

const createData = getPictures();
renderPictures(createData);

renderGallerey();

