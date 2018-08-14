import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

    getChildContext() {
        return {store: this.props.store}
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export function connect(mapStateToProps, mapDispatchToProps) {

    return function (Child) {
        return class WrapComponent extends Component {
            static contextTypes = {
                store: PropTypes.object.isRequired
            }

            componentWillMount() {
                const {store} = this.context
                this._updateProps()
                store.subscribe(() => this._updateProps())
            }

            _stateProps() {
                var stateProps = mapStateToProps(this.context.store.getState());
                return stateProps;
            }

            _disPatchProps() {
                return mapDispatchToProps(this.context.store.dispatch);
            }

            _updateProps() {
                const {store} = this.context;
                let stateProps = this._stateProps();
                let dispatchProps = this._disPatchProps();
                let state = {...stateProps, ...dispatchProps};
                this.setState(state);

            }

            render() {
                return (<Child {...this.state}></Child>)
            }
        }
    }

}