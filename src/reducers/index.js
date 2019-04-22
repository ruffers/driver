import { combineReducers } from 'redux';

const AE86 = combineReducers({
    chat: (state = {}, action) => {
        switch (action.type){
            default:
                return state;
        }
    }
});

export default AE86;
