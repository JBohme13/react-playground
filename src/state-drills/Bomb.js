import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    };
    componentDidMount() {
        this.interval = setInterval( () => {
            this.setState({count: this.state.count+1 })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    };
    messageContent() {
       const {count} = this.state;
       if (count === 9) {
           clearInterval(this.interval)
       } else if( count === 8) {
           return 'BOOM!!!'
       } else if( count % 2 ===0) {
            return 'tick'
       } else {
           return 'tock'
       }
    };
        
    render() {
        return(
            <div>
                {this.messageContent()}
            </div>
        )
    };
}

export default Bomb