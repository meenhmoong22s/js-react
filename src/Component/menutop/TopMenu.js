import React, { Component } from 'react';

//gõ rcc để gọi component setup

class TopMenu extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            // Navigation
            // < nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" >
            //     <div className="container">
            //         <a className="navbar-brand" href="#">Start Bootstrap</a>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon" />
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarResponsive">
            //             <ul className="navbar-nav ml-auto">
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="#">Sign Up</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="#">Log In</a>
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav >
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">
                <img src={this.props.anh} alt="Logo" style={{width: '40px'}} />
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default TopMenu;