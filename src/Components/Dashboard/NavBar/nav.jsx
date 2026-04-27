import React from 'react'
import './nav.css';


const Nav = () => {
    const islogin = localStorage.getItem('login');
    // console.log(islogin)
    const logout =()=>{
        localStorage.removeItem('login');
         window.location.reload();
    };
    return (
        <div>
            <div className="main">
                <div className="nav">
                    <div className="logo">BrandName</div>

                    <div className="nav-links">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Contact Us</a>
                    </div>

                    <div className="buttons">
                        {islogin ? (
                            <button className="btn" onClick={logout}>Log-Out</button>
                        ) : (
                            <button className="btn">Login</button>,
                            <button className="btn btn-primary">Register</button>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
