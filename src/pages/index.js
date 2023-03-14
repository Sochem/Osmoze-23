import Mid from "@/components/mid"
import Hero from "../components/hero"
import Midbutton from "@/components/midbutton"
import Carousel from "@/components/carousel"
import Team from "@/components/team"
import Sponsors from "@/components/sponsors"
import Events from "@/components/events"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function index() {
	return(
    <>
        <Navbar/> 
        <Hero/>
        <Mid/>
        <Midbutton/>
        <Carousel/>
        <Midbutton/>
        <Team/>
        <Midbutton/>
        <Sponsors/>
        <Footer/>
        {/* <Events/> */}
    </>
    )
}
