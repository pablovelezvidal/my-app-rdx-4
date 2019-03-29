import { createStore } from 'redux';
import constants from './constants';

const initialState = {
    inputText: '',
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.CHANGE_INPUT_TEXT:
            return Object.assign({}, state, { inputText : action.inputText });
        case constants.ADD_ITEM:
            if (state.inputText !== "") {
                return Object.assign({}, state, {
                    items: state.items.concat(state.inputText),
                    inputText: ''
                });
            } else {
                return state;
            }
        case constants.DELETE_ITEM:
            const itemsFiltered = state.items.filter((item, index) => index !== action.index);
            return Object.assign({}, state, { items: itemsFiltered });
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;