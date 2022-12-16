import Navbar from "../components/navbar"
import Community from "../components/community"
import communitiesdata from "../sample db/communitydb"
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants"
import Footer from "../components/footer"


export default function Communities(){

    
    return(
        <>
        <Navbar />
        <div className="gallary">
        {
            communitiesdata.map(value=>{
               return <Community name={value.name} imgsrc={value.imgsrc} type={value.topic} description={value.description} src={value.src} members={value.members} />
            })
        }
        </div>
        <Footer/>
        </>
    )
}