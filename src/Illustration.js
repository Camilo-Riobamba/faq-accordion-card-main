import React from "react";

//media
import illustrationWoman from './images/illustration-woman-online-mobile.svg';

export default class Illustration extends React.Component{
    render(){
        return (
            <div className="text-center">
                <img src={illustrationWoman} alt="illustration" className="w-100"/>
            </div>
        );
    }
}