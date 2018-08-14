import React, {Component} from 'react';
import {connect} from "../redux/react-redux";
import {addMessage} from "../redux/reducer";

function mapStateToProps(state) {
    return {myFuckingMsg: state.message}
}

function mapDispatchToProps(dispatch) {
    return {addMsg: (v) => dispatch(addMessage(v))}
}

class Title extends Component {
    constructor(props) {
        super(props);
        this.state={msg:''}
    }

    handleChange(e) {
 this.setState({msg:e.target.value})
    }

    handleClick() {
        let msg = this.state.msg;
        this.props.addMsg(msg);
    }

    render() {
        return (<div>
            <p>{this.props.myFuckingMsg.map((v, i) => <span key={i}>{v},</span>)}</p>
            <input type="text" onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleClick.bind(this)}>btn</button>
        </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);

