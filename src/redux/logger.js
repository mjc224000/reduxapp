export default function logger(store) {

    return function (next) {

        return function (action) {
            console.log('before dispatch :', store.getState());
                 next(action);
            console.log("after dispatch:", store.getState())
        }
    }
}