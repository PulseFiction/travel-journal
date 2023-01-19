import React from "react"
import Globe from "../assets/globe.svg"

export default function Header() {
    return (
        <div className="header">
            <img className="header--logo" src={Globe}></img>
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
}