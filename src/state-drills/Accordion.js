import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        currentSectionIndex: null
    };

    handleButtonClick(index)  {
        this.setState({ currentSectionIndex: index })

    };

    renderListItem() {
        return this.props.sections.map((section, index) => (
            <li key={index} className='section flexindex=1'>
                <button className='sectionButton' onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {this.state.currentSectionIndex === index && <p className='sectionBody'>{section.content}</p>}
            </li>
        ))
    };

    render() {
        return(
            <ul className='sectionContainer'>
                {this.renderListItem()}
            </ul>
        )
    }
}