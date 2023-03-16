import Mid from "@/components/mid"
import Hero from "../components/hero"
import Midbutton from "@/components/midbutton"
import Carousel from "@/components/carousel"
import Team from "@/components/team"
import Sponsors from "@/components/sponsors"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Default from "@/components/default";
import { useEffect } from "react"
import Image from "next/image"

export default function index() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scroll = window.scrollY;
            console.log(scroll);
            let body = document.querySelector(".body");
            let midSection = document.querySelector(".midSection");
            let heroSection = document.querySelector(".heroSection");
            let navSection = document.querySelector(".navSection");
            let mainImage = document.querySelector(".mainImage");
            body.classList.remove("gradient-scroll-animation");
            // console.log(midSection);

            if (scroll < 200) {
                heroSection.style.opacity = "0";
                navSection.style.opacity = "0";
                mainImage.style.opacity = "1";
            } else if (scroll >= 200 && scroll < 750) {
                // midSection.classList.add("gradient-scroll-animation");
                heroSection.style.opacity = "1";
                navSection.style.opacity = "1";
                mainImage.style.opacity = "0";
            } else if (scroll >= 980 && scroll < 2000) {
                heroSection.style.opacity = "0";
                midSection.classList.add("gradient-scroll-animation");
                midSection.style.opacity = "1";
            } else if (scroll >= 1500) {
                body.style.background = "white";
                // midSection.classList.remove("gradient-scroll-animation");
                // midSection.style.marginBottom = "2rem";
                // midSection.classList.add("fadeOut")
                midSection.style.opacity = "0";
                // midSection.style.position = "relative";
            }
        });
    }, [])

	return (
        <div className="body">
        {/* <Default /> */}
        <div className="mainImage mt-[8rem]">
            <Image src={"/images/hero-logo.svg"} width={401} height={401}  />
        </div>
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
    </div>
    );x
}
