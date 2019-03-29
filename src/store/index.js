import { createStore } from 'redux';

const initialState = {
    inputText: '',
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_TEXT':
            return Object.assign({}, state, { inputText : action.inputText });
        case 'ADD_ITEM':
            if (state.inputText !== "") {
                return Object.assign({}, state, {
                    items: state.items.concat(state.inputText),
                    inputText: ''
                });
            } else {
                return state;
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;