import React from 'react'

import MenuBar from './menu_bar'

const Layout = () => {
    
    const cover =   "./images/construction.jpg";
        const style = {
          backgroundImage: "url("+cover+")",
          backgroundSize: "100% 100%"
        }
        return(
          <div className="container-box" style={style}>
            <div className="position-box">
            <div className="bottom-box">
              <h1>Building Exellence for over 30 years </h1>
              <MenuBar />
            </div>
            </div>
          </div>
          
        )
      }


export default Layout