import Link from 'next/link'


function Navbar(props){
    return(
        <div className="navbar">
        <div id='logo'>Logo</div>
        <div className="header">
            <ul className='navtab'>
                <Link className="nostyle" href='/'><li className='navelem'>Home</li></Link>
                <Link className="nostyle" href='/mission'><li className='navelem'>Our Mission</li></Link>
                <Link className="nostyle" href='/marketplace'><li className='navelem'>Market Place</li></Link>
                <Link className="nostyle" href='/communities'><li className='navelem'>Communities</li></Link>
                <Link className="nostyle" href='/signup'><li className='navelem join'><div className='joinBtn'>Join</div></li></Link>
            </ul>
        </div>
        </div>
    )
}

export default Navbar