import {getPictures} from './create-data.js';
import {renderPictures} from './photo-template-display.js';

const createData = getPictures();
renderPictures(createData);

