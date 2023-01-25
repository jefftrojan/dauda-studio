import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'


class Navbar extends Component{
    state = {isActive: false}

    handleClick = () => {
        this.setState({isActive: !this.state.isActive})
    }

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className='navbar-logo'>
                J3ff 
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.isActive ? 'fas fa-xmark' : 'fas fa-bars-staggered'}></i>

                </div>
                <ul className={this.state.isActive ? 'nav-menu active': "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}>
                                < a className={item.cName} href={item.url}>
                                    {item.title}

                                </a>
                            </li>

                        )
                    }
                    
                    )}
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar;