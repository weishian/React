import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }


    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
         this.inputElement.current.focus();
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authentivated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    typ="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changde: PropTypes.func
};

export default withClass(Person, classes.Person);