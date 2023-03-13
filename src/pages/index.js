import Mid from "@/components/mid"
import Hero from "../components/hero"
import Midbutton from "@/components/midbutton"
import Carousel from "@/components/carousel"
import Team from "@/components/team"
import Sponsors from "@/components/sponsors"

export default function index() {
	return(
    <>
        <Hero/>
        <Mid/>
        <Midbutton/>
        <Carousel/>
        <Midbutton/>
        <Team/>
        <Midbutton/>
        <Sponsors/>
    </>
    )
}