function Thunk(store) {
    return (next) => (action) => {
        if (typeof action === 'function') {
            action(next);
        }
        next(action);
    }
}

function logger(store) {
    return (next) => (action) => {
        console.log('before');
        next(action);
        console.log('after');
    }
}

function loggerAfterApi(next) {
    return (action) => {
        console.log('before');
        next(action);
        console.log('after');
    }
}

let thunkAfteAPI = (next) => (action) => {
    if (typeof action === 'function') {
        action(next);
    }
    next(action);
}

let compose=function (next) {
 loggerAfterApi(thunkAfteAPI(next))
}

function log1(action) {
    console.log(action)
}
function logBeforeAfter(next) {
    return function (action) {
        console.log('before');
        next(action);
        console.log('after');
    }
}

function asyncAction(next) {
    return function (action) {
        console.log('async...')
        setTimeout(next,3000,action)
    }
}

var xdLog1= asyncAction(logBeforeAfter(log1));
xdLog1('action');

export default {};