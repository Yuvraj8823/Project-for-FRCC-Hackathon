import Link from "next/link"
function Community(props){
    return(
        <div className="cards">
        <img src={props.imgsrc} alt={props.name} className="card_img" />
        <div className="card_info">
            <div className="card_type">{props.type}</div>
            <div className="card_name">{props.name}</div>
            <div className="member">{props.members}</div>
            <div className="commDescription">{props.description}</div>
            <Link className='nostyle' href={props.src} target="_blank">
            <div className="watch">Join</div>
            </Link>
        </div>
    </div>
    )
}

export default Community