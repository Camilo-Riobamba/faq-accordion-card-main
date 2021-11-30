import React from "react";

//media
import boxDesktop from './images/illustration-box-desktop.svg';
import illustrationWoman from './images/illustration-woman-online-mobile.svg';
import illustrationWomanDesktop from './images/illustration-woman-online-desktop.svg';

export default class Illustration extends React.Component{
    render(){
        return (
            <div>
                <img src={illustrationWoman} alt=""/>
            </div>
        );
    }
}