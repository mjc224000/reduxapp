var iniState = {message: ['s']};
const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(payload = 's') {
    return {type: ADD_MESSAGE, payload}
}

export default function reducer(state = iniState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            state = {...state, message: [...state.message, action.payload]}
            break
        }
        default :
            state = state;
    }
    console.log('zhixing');
    return state
}