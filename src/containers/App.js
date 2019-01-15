import React from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import BaseComponent from '../components/BaseComponent';
import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends BaseComponent {

  state = {
    persons: [
      { id: 'sdf', name: 'Max', age: 28 },
      { id: 'fd', name: 'Manu', age: 29 },
      { id: 'sdfs', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
    }
    return (
      <Aux>
        {super.render()}
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, 
    //        React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default withClass(App, classes.App);
