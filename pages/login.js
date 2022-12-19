import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Login(){
    return(
        <div className="body">
        <Navbar />
        <div className="loginpage">
            <form action="/api/login" method="POST">
                <input type="text" placeholder="Username" name="username" className="logincred" />
                <input type="password" placeholder="Password" name="password"class="logincred" />
                <input type="submit" className="submitBtn" value="Submit"/>
            </form>
            <Link href="/forgot">Forgot password</Link>
            <Link href="/signup">Create New Account</Link>
        </div>
        <Footer/>
        </div>
    )
}