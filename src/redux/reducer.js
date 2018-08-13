var iniState = {message: ['s']};
const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage() {
    return {type:ADD_MESSAGE,payload:'s'}
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
    return state
}