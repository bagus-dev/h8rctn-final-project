import React from "react";
import Searchbox from "./Searchbox";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a href="#" className="navbar-brand">Final Project</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <Searchbox />
                </div>
            </div>
        </nav>
    )
}

export default Header