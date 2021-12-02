import React from "react";

//media
import illustrationWoman from './images/illustration-woman-online-mobile.svg';

export default class Illustration extends React.Component{
    render(){
        return (
            <div className="w-80 w-100-md">
                <img src={illustrationWoman} alt="illustration" className="w-100" style={{
                    filter: "drop-shadow(0px 10px 5px rgb(0 0 0 / 0.25))"
                }}/>
            </div>
        );
    }
}