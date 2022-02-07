import React from "react";
import '../stylesheets/Nav.css';


function Nav() {

    return (
        <div className="container-fluid">
            <div className="row" id="Nav_row">
                <div className="col-md-1" id="Nav_Cal_1">
                    <a className="navbar-brand" href="/">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
                <div className="col-md-1" id="Nav_Cal_2">
                    <a className="navbar-brand" href="/">EIMS</a>
                </div>
                <div className="col-md-4" id="">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" id="">

                </div>
                <div className="col-md-2" id="NavIcons">
                    <i class="fab fa-facebook-messenger"></i>
                    <i class="fas fa-bell"></i>
                    <i class="fas fa-user-circle"></i>
                </div>
            </div>
        </div>

    );
}


export default Nav;