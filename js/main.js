import {getPictures} from './create-data.js';
import {renderGallerey} from './gallarey.js';

const createData = getPictures();


renderGallerey(createData);
