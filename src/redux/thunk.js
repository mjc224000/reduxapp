export function thunk(store) {
    return function (next) {
        return function (action) {
            if (typeof action === 'function') {
                action(next)
            }
            console.log('thunk');
            next(action)
        }
    }
}