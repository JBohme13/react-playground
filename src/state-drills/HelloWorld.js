import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    };
    handleButton1 = () => {
        this.setState({who: 'React'})
    };
    handleButton2 = () => {
        this.setState({who: 'Friend'})
    };
    handleButton3 = () => {
        this.setState({who: 'World'})
    };
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick ={this.handleButton1}>React</button>
                <button onClick ={this.handleButton2}>Friend</button>
                <button onClick ={this.handleButton3}>World</button>
            </div>
        )
    }
}
export default HelloWorld