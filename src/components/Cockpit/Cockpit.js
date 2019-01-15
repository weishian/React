import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let assignClasses = [];
    let btnClass = classes.Button;
    
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(" ");
    }
    if (props.persons.length <= 2) {
        assignClasses.push(classes.Red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.Bold); // classes = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};

export default cockpit;