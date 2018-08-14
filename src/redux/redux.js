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
    dispatch({type: 1});
    return {dispatch, subscribe, getState}
}


export function applyMiddleWare(...middlewares) {
    return createStore => (...args) => {
        let store = createStore(...args)
        let dispatch = function () {
            throw new Error('nmsl')
        }
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        return {...store, dispatch}
    }


}
