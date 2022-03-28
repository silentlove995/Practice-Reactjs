import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducerAll from '../reducers';
import authSaga from '../sagas/authSaga'

// create th saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducerAll, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(authSaga)

store.subscribe(() => {
    console.log(store.getState())
})

export default store;