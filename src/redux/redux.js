export default function createStore(reducer) {
    var state, listener = [];
    var dispatch = function (action) {

        state = reducer(state, action)
        listener.forEach(fn => fn());
    }
    var subscribe = function (fn) {
        listener.push(fn)
    }
    var getState = function () {
        return state;
    }
    dispatch( {type:1});
    return {dispatch, subscribe, getState}
}




