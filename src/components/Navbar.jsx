import { useState } from "react";
import { Link } from "react-router-dom";
import SideBarData from "./SideBarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import '../css/Navbar.css';
import { IconContext } from "react-icons/lib";

function Navbar(props) {

    const value = props.value;

    const [ sidebar,  setSidebar ] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

    return (
        <>
            {
                value && 
                <IconContext.Provider value={{color:'#fff'}}>
                    <div className='navbar'>
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSideBar}/>
                        </Link>

                        <div className="im"></div>
                    </div>   

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                        <ul className="nav-menu-items" onClick={showSideBar}>
                            <li className="navbar-toggle">
                                <Link to='#' className="menu-bars">
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} >
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            }

        </>
    )
}

export default Navbar
