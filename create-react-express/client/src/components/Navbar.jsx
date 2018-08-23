import React from "react";

const Navbar = () => (
    <div>

        <div className="header-bg-grad"></div>
        <nav>
            <div className="nav-wrapper">


                <a href="#!" className="brand-logo">W<span className="animate-flicker">e</span>ird Wide Web</a>


                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Randomize</a>
                    </li>
                    <li>
                        <a href="#">Submit</a>
                    </li>
                    {/* <!-- Dropdown Trigger --> */}
                    <li>
                        <a className="dropdown-trigger" href="#!" data-target="dropdown1">Categories
                        <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </li>
                    <li>
                        <span id="userName">BreannaLordoftheDarkStar71</span>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>

)

export default Navbar;