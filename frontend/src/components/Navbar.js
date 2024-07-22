//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";

import { Link } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Navbar() {
    let usertype = sessionStorage.getItem('utype')
    //let usertype = localStorage.getItem('utype')
    let username = sessionStorage.getItem('username')

    if (usertype === 'ADMIN') {
        return (
            <>
                <nav>
                    <Link to="/adminafterlogin">ADMIN HOME |</Link>
                    <Link to="#">SEARCH USER |</Link>
                    <Link to="#">VIEW ALL |</Link>
                    <Link to="#">DEL |</Link>
                    <Link to="/adminlogout">LOGOUT</Link>
                </nav>
                <hr />
            </>
        )
    }
    else if (usertype === 'USER') {
        return (
            <>
                <nav>
                    <Link to="#">USER HOME |</Link>
                    <Link to="#">PROFILE UPDATE |</Link>
                    <Link to="/userlogout">LOGOUT</Link>
                </nav>
                <hr />
                <h3 style={{ color: 'brown' }}>WELCOME {username}</h3>
            </>
        )
    }
    else {
        return (
            <>
                <nav>
                    <Link to="/">HOME |</Link>
                    <Link to="/userreg">REG |</Link>
                    <Link to="/userlogin">LOGIN |</Link>
                    <Link to="/contactus">CONTACT US |</Link>
                    <Link to="/adminlogin">ADMIN LOGIN</Link>
                </nav>
                <hr />
            </>
        )
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default Navbar