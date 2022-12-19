import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

export default function Login(){
    return(
        <div className="body">
        <Navbar />
        <div className="loginpage">
            <form action="/api/registeration" method="POST">
                <input type="text" placeholder="email" className="logincred" id='email' name='email'/>
                <input type="text" placeholder="Username" className="logincred" name='username' id='username'/>
                <input type="password" placeholder="Password" className="logincred" name='password' id='password'/>
                <input type="submit" className="submitBtn" value="Submit"/>
            </form>
            <Link href="/forgot">Forgot password</Link>
            <Link href="/login">Login</Link>
        </div>
        <Footer />
        </div>
    )
}