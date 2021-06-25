import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function NavBar() {
    return (
        <div className="navBar">
                <ul>
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/saved">Saved</Link></li>
                </ul>

        </div>
    )
}
