import { createStore } from 'redux'

function reducers(state, action){
    console.log(action);
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(reducers, {})

export default store;