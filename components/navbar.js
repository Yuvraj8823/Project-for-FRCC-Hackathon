import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState,useRef } from 'react'


function Navbar(props){

const navItem = useRef(null)
const sidebar = ()=>{
    console.log(navItem.current.style.width)
    if(navItem.current.style.width=='200px'){
        navItem.current.style.width='0'
    }
    else{
        navItem.current.style.width='200px'
    }
}
    return(
        <div className="navbar">
        <div id='logo'>Logo</div>
            
        <div id='icon'>
            <ul className='navtab'>
                <Link className="nostyle" href='/'><li className='navelem vis'>Home</li></Link>
                <Link className="nostyle" href='/mission'><li className='navelem vis'>Our Mission</li></Link>
                <Link className="nostyle" href='/marketplace'><li className='navelem vis'>Market Place</li></Link>
                <Link className="nostyle" href='/communities'><li className='navelem vis'>Communities</li></Link>
                <Link className="nostyle" href='/signup'><li className='navelem join vis'><div className='joinBtn'>Join</div></li></Link>
                <li className='hamburger navelem'><RxHamburgerMenu className='hamburger' onClick={sidebar}/></li>
            </ul>
        </div>
        
        <div className="sidebarmenu" ref={navItem}>
        <div className="logo">
        </div>
        
                <Link className="nostyle" href='/'><div className='sidelem'>Home</div></Link>
                <Link className="nostyle" href='/mission'><div className='sidelem'>Our Mission</div></Link>
                <Link className="nostyle" href='/marketplace'><div className='sidelem'>Market Place</div></Link>
                <Link className="nostyle" href='/communities'><div className='sidelem'>Communities</div></Link>
                
        </div>
        </div>
        
    )
}

export default Navbar