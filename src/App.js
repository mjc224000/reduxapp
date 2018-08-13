import React, {Component} from 'react';
import Provider,{connect} from './redux/react-redux';
import PropTypes from 'prop-types';
import createStore from './redux/redux';
import reducer from './redux/reducer';
import Title from './component/title';
import './App.css';

console.log(Title);
var store = createStore(reducer);

class App extends Component {
    componentWillMount() {

    }
    render() {
        return (
            <Provider store={store}>
<Title></Title>
            </Provider>
        );
    }
}
class A extends Component{
    static contextTypes={
    store:PropTypes.object.isRequired
}
    render(){
        console.log(this.context.store);
        return (<div> p</div>)
    }
}


export default App;
