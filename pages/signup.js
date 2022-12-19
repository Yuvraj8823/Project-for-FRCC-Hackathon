import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
export default function Login(){
    return(
        <div className="body">
        <Navbar />
        <div className="loginpage">
            <form action="/" method="get">
                <input type="text" placeholder="phone or email" className="logincred" />
                <input type="text" placeholder="Username" className="logincred" />
                <input type="password" placeholder="Password" class="logincred" />
                <input type="password" placeholder="Confirm Password" class="logincred" />
                <input type="submit" className="submitBtn" value="Submit"/>
            </form>
            <Link href="/forgot">Forgot password</Link>
            <Link href="/login">Login</Link>
        </div>
        <Footer />
        </div>
    )
}