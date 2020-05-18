import { combineReducers } from 'redux'
import film from './film'


//Об'єднуємо усі redusers
export default combineReducers({
    filmColection: film
})

