import React from "react";
import logoIcon from "../../images/logoIcon.png"
import "./header.css"

export default function Header(props){
    return (
        <header className="Header">
            <img className="Header--item" src={logoIcon} alt=""/>
            <h3 className="Header--item">my travel journal.</h3>
        </header>
    )
}