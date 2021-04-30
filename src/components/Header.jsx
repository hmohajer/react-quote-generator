import React from "react";

function Header({content}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-center p-4">
                <span className="navbar-brand">
                    <h1>{content}</h1>
                </span>
            </div>
        </nav>
    );
}

export default Header;
