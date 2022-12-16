export default function SalesCard(props){
    return(
        <>
        <div className="product">
            <img className="proimg" src={props.imgsrc}/>
            <div className="productdes">
                <h3 className="proName">{props.name}</h3>
                <p className="proDes">{props.description}</p>
                <h3 className="proCost">{props.cost}</h3>
                <p className="proState">{props.availability}</p>
                <p className="proloc">{props.location}</p>
            </div>
        </div>
        </>
    )
}