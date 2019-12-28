import { combineReducers } from 'redux';

import currentPath from './currentPath';
import folderContent from './folderContent';

const rootReducer = combineReducers({ currentPath, folderContent });

export default rootReducer;
