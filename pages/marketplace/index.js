import Navbar from "../../components/navbar"
import SalesCard from "../../components/salescard"
import salesData from "../../sample db/salesdb"
import Footer from "../../components/footer"
export default function MarketPlace(){
    return(
        <>
        <Navbar />
        {
            salesData.map(value=>{
                return (<>
                <SalesCard imgsrc={value.imgsrc} name={value.name} description={value.description} cost={value.price} location={value.location}
                availability={value.status}/>
                </>)
            })
        }
        <Footer/>
        </>
    )
    
}