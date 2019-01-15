import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.persons.length > 0) {
            this.lastPersonRef.current.focus();
        }
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                position={index}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                authenticated={this.props.isAuthenticated}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;