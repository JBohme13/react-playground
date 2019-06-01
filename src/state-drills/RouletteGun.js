import React from 'react';

export default class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheCamber: false
    };
    static defaultProps = {
        bulletInChamber: 8,
    };
    
    componentWillUnmount() {
        clearTimeout(this.timeout)
    };

    handleButtonClick = () => {
        this.setState({spinningTheChamber: true})
        this.timeOut = setTimeout(() => {
            const randomChamber =  Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
        })}, 2000)
    };

    Message()  {
        const {chamber, spinningTheChamber} = this.state
        const{bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!'
        } else {
            return 'You\'re Safe!'
        }
    };

    render() {
        return(
            <div>
                <p>{this.Message()}</p>
                <button onClick={this.handleButtonClick}>Pull The Trigger!!!</button>
            </div>

        )
    };
}