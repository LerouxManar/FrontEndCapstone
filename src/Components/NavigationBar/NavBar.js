import React from "react"
import {MenuItems} from "./MenuItems"
import "./Bardesign.css"
import {Link} from 'react-router-dom';

function NavBar () {
    return(

     
        <nav className="Navbaritems">
          <h1 className="navbarLogo">CGI HIRING</h1>

          <ul className="nav-Menu">
            {MenuItems.map ((item,index)=>{
              return (
                <li key={index}>
                
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
                </li>
              )
            })}
          

          </ul>
          <Link to="/LoginPage" >
          <button className="homePageButton" >Sign Up</button>
          </Link>

        </nav>
      
     
      
  
     
    );

    
}

export default NavBar;