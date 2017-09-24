import React from 'react';
import {Link} from 'react-router';


const Header= () => {
   
    
        return (
            <nav className="navbar">
                <div className="basket">
                    <div className="navbar-header">
                        <ul className="navbar-nav">
                            <img className="logo" src={'logo.png'} />
                            <li> <Link to={"about_us"}>About us</Link></li>
                            <li> <Link to={"/services"}>Services</Link></li>
                            <li> <Link to={"/portfolio"}>Portfolio</Link></li>

                            <li> <Link to={"/careers"}>Careers</Link></li>

                            <li> <Link to={"/contact_us"}>Contact us</Link></li>



                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
    export default Header