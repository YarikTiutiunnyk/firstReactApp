import { combineReducers } from 'redux';
import film from './film';
import serch from './serch';
import menu from './menu';
//Об'єднуємо усі redusers
export default combineReducers({
  filmColection: film,
  serch: serch,
  menu: menu
});
