import React from "react";

//media
import arrowDown from './images/icon-arrow-down.svg';

export default class Dropdown extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <span>
                        <h3>{this.props.title}</h3>
                    </span>
                    <span>
                        <img src={arrowDown} alt="arrow down"/>
                    </span>
                </div>
                <div>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }
}