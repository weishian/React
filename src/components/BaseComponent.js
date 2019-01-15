import { Component } from 'react';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.constructor.name + ' Inside Constructor', props);
    }

    componentWillMount() {
        console.log(this.constructor.name + ' Inside componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.constructor.name + ' Inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.constructor.name + ' Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps !== this.props || nextState !== this.setState
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.constructor.name + ' Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log(this.constructor.name + ' Inside componentDidUpdate');
    }

    componentDidMount() {
        console.log(this.constructor.name + ' Inside componentDidMount');
    }

    render() {
        console.log(this.constructor.name + ' Inside Render');
        return null;
    }
}

export default BaseComponent;