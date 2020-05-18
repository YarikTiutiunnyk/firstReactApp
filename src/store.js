import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';
import rootReducer from './reducers'

//Створюємо Store і додаємо до нього посередників
export default () =>{
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store;

}
