import { createStore } from 'redux'
import rootReducer from '../src/reducers/reducer'

const store = createStore(rootReducer)

export default store;