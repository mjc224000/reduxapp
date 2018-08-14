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

let thunkAfterAPI = (next) => (action) => {
    if (typeof action === 'function') {
        action(next);
    }
    next(action);
}

let compose = function (next) {
    loggerAfterApi(thunkAfterAPI(next))
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
        setTimeout(next, 3000, action)
    }
}

var xdLog1 = asyncAction(logBeforeAfter(log1));
xdLog1('action');

function o(n) {
    console.log(n);
}

function dec1(n) {
    console.log(111122221);
    n()
}

function dec2(n) {
    console.log(22222);
    n();
}

dec2(() => dec1(() => o('nmsl')));

function compose1(...fns) {
   return fns.reduce((a, b) => {
        return (o) => b(() => a(o))
    })
}

compose1(dec1, dec2)(()=>o(0))

export default {};