import React from "react";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
               <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link text-light">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;
