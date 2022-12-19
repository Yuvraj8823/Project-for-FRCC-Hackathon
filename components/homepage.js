import Link from "next/link";

function HomePage(){
    return<div className="home">
    <div className="hpcontent">
      <h1 className="h1">Connect</h1>
      <h1 className="h1">Contribute</h1>
      <h1 className="h1">Communicate</h1>
      <Link className="nostyle" href="/signup"><div id="joinNow">Join Now</div></Link>
    </div>
    <img src="/hpimg.jpeg" className="hpimg" />
  </div>
}

export default HomePage