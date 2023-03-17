import Image from "next/image";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import { motion } from "framer-motion";

const sponsors = [
    ['gfg logo.png','yog4lyf.png','irc.jpeg'],
    ['sponsor.svg','sponsor.svg','sponsor.svg']
]

const list = ['gfg logo.png','yog4lyf.png','irc.jpeg']
const name=['GFG', "Yog4lyf", "IRC"]
const sponsorsPhone = [
    ['gfg logo.png'],
    ['yog4lyf.png'],
    ['irc.jpeg'],
]

function Element(props) {
    return (
        <div>
            <img src={`/images/${props.src}`} />
            {/* <p className="legend">"Name"</p> */}
        </div>
    )
}

export default function Sponsors() {

    return (
        <div>

            <div className="flex flex-col items-center pb-12 mt-[10rem] sm:mx-[10.625rem]">
                <div className="font-extrabold items-center text-center sm:text-[36px] tracking-wider">Meet our</div>
                <div className="font-extrabold items-center text-center sm:text-[48px] tracking-wider">Sponsors</div>
            </div>
            <div style={{ width: "16rem", height: "16rem", margin: "0 auto 10rem auto" }}>
                <Carousel autoPlay={true} infiniteLoop={true}>
                    {list.map(function (element) {
                        return <Element src={element} />
                    })}
                </Carousel>
            </div>
        </div>

    );
}
    // return(
    //     <div className="flex flex-col items-center pb-12 mt-[10rem] sm:mx-[10.625rem]">
    //         <div className="font-extrabold items-center text-center sm:text-[36px] tracking-wider">Meet our</div>
    //         <div className="font-extrabold items-center text-center sm:text-[48px] tracking-wider">Sponsors</div>
    //         <div className="flex justify-around mt-32 items-center">
    //             <div className="hidden sm:block">
    //                 <button onClick={handleLeftClick}>
    //                     <Image src={"/images/left.svg"} width={68} height={119}/>
    //                 </button>
    //             </div>
    //             <div className="sm:hidden block">
    //                 <button onClick={handleLeftClick}>
    //                     <Image src={"/images/left.svg"} width={26} height={49}/>
    //                 </button>
    //             </div>
    //             <div className="hidden mx-[6.5rem] sm:flex">
    //                 {sponsors[data].map((item)=>{
    //                     return(
    //                         <div className="mx-[4.813rem]"><Image src={`/images/${item}`} width={222} height={202}/></div>
    //                     )
    //                 })}
    //             </div>
    //             <div className="sm:hidden flex">
    //                 {sponsorsPhone[data].map((item)=>{
    //                     return(
    //                         <div className=""><Image src={`/images/${item}`} width={105} height={108}/></div>
    //                     )
    //                 })}
    //             </div>
    //             <div className="hidden sm:block">
    //                 <button onClick={handleRightClick}>
    //                     <Image src={"/images/right.svg"} width={68} height={119}/>
    //                 </button>
    //             </div>
    //             <div className="sm:hidden block">
    //                 <button onClick={handleRightClick}>
    //                     <Image src={"/images/right.svg"} width={26} height={49}/>
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // )
