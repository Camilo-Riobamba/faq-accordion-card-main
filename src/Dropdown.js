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
            <div className="border pt-2 pb-2 text-very-dark-grayish-blue">
                <div className="container space-between" onClick={this.toggleDropdown}>
                    <span>
                        <h3 className={ `m-0 ${this.state.active ? "text-dark bold" : "normal"}` }>{this.props.title}</h3>
                    </span>
                    <span>
                        {
                            this.state.active ?

                            <img src={arrowDown} alt="arrow down" className="rotate-180"/> :
                            <img src={arrowDown} alt="arrow down"/>
                        }
                    </span>
                </div>
                <div className={ this.state.active ? "d-block" : "d-none" }>
                    <p className="text-dark-grayish-blue">
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }
}