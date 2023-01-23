import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function NavbarSection() {
    return (
        <>
            <div className='generaldivnavbar'>
                <Link to={"/"}> <a> Notary </a>  </Link>
                <div className='rightside'>
                    <Link to={"/"}> <a> Home </a> </Link>
                    <Link to={"/add"}> <a> Add </a> </Link>
                </div>
            </div>
        </>
    )
}

export default NavbarSection