import React, {Component} from 'react';
import {connect} from "../redux/react-redux";
import {addMessage} from "../redux/reducer";

function mapStateToProps(state) {
    return {myFuckingMsg: state.message}
}

function mapDispatchToProps(dispatch) {
    return {addMsg: () => dispatch(addMessage())}
}
class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (   <div>
            <p>{this.props.myFuckingMsg.map((v, i) => <span key={i}>{v}</span>)}</p>
            <button onClick={this.props.addMsg}>btn</button>
        </div>)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Title);

