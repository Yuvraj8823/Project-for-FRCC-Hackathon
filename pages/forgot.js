import Navbar from "../components/navbar"
import Link from "next/link"
export default function Forgot(){
    return(
        <div className="body">
        <Navbar/>
        <div className="loginpage">
            <h1 style={{margin:'20px'}}>Forgot Password</h1>
            <form action="/" method="get">
                <input type="text" placeholder="phone or email" class="logincred" />
                <input type="submit" className="submitBtn" value="Submit"/>
            </form>
            <Link href="/login">Login</Link>
            <Link href="/signup">Create New Account</Link>
        </div>
        </div>
    )
}