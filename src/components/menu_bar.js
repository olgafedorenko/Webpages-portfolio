import React from 'react';
import {Link} from 'react-router';


const MenuBar= () => {
   
    
        return (
            <div>
                    <ul className="menu-nav">
                            <li> <Link to={"about_us"}><p>About us</p> <img className="menu" src={'./images/about_us.jpeg'} /></Link></li>
                            <li> <Link to={"/services"}> <p>Services</p><img className="menu" src={'./images/service.jpeg'} /></Link></li>
                            <li> <Link to={"/portfolio"}><p>Portfolio</p><img className="menu" src={'./images/portfolio.jpg'} /></Link></li>



                        </ul>
                
                </div>

           
        )
    }
    export default MenuBar