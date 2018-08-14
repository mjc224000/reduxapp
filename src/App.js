import React, {Component} from 'react';
import Provider,{connect} from './redux/react-redux';
import createStore from './redux/redux';
import reducer from './redux/reducer';
import Title from './component/title';
//import {applyMiddleWare} from './redux/redux';
import {applyMiddleware} from "redux";
import {thunk} from "./redux/thunk";
import logger from "./redux/logger"
import './App.css';

let st= applyMiddleware(thunk,logger)(createStore)(reducer)
console.log(st,111);


var store = createStore(reducer);
class App extends Component {

    render() {
        return (
            <Provider store={st}>
<Title></Title>
            </Provider>
        );
    }
}
export default App;
