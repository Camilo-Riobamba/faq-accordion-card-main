import React from "react";

//media
import arrowDown from './images/icon-arrow-down.svg';

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(){
        this.setState((prevState) => ({
            active: !prevState.active
        }))
    }

    render(){
        return (
            <div>
                <div>
                    <span>
                        <h3>{this.props.title}</h3>
                    </span>
                    <span onClick={this.toggleDropdown}>
                        {
                            this.state.active ?

                            <img src={arrowDown} alt="arrow down"/> :
                            <img src={arrowDown} alt="arrow down" className="rotate-180"/>
                        }
                    </span>
                </div>
                <div className={ this.state.active ? "d-block" : "d-none" }>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }
}