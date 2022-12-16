import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Login(){
    return(
        <>
        <Navbar />
        <div className="loginpage">
            <form action="/" method="get">
                <input type="text" placeholder="Username" className="logincred" />
                <input type="password" placeholder="Password" class="logincred" />
                <input type="submit" className="submitBtn" value="Submit"/>
            </form>
            <Link href="/forgot">Forgot password</Link>
            <Link href="/signup">Create New Account</Link>
        </div>
        <Footer/>
        </>
    )
}