import React from "react";

//media
import boxDesktop from './images/illustration-box-desktop.svg';
import illustrationWoman from './images/illustration-woman-online-mobile.svg';
import illustrationWomanDesktop from './images/illustration-woman-online-desktop.svg';

//imports
import breakpoints from "./breakpoints";

export default class Illustration extends React.Component{
    render(){
        return (
            <div>
                <picture>
                    <source src={illustrationWomanDesktop} media={`(min-width: ${breakpoints.md}px)`}/>
                    <img src={illustrationWoman} alt="Illustration of faq"/>
                </picture>
                <div>
                    <img src={boxDesktop} alt=""/>
                </div>
            </div>
        );
    }
}