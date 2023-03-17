import Image from "next/image";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";



export default function Carousel(){
    return(
        <div className="carousel">
            <div id="expandable">
            <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 5,
                    ease: [0.5,0.71,1, 1.5],
                    
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
            <div className="text-1">
             Commemorate joy, happiness and festivity in

            </div>
            <div className="text-2">
                exciting <br></br>&nbsp; &nbsp; &nbsp; events.
            </div>
            </motion.h1>
           
            </div>

            
            <div className="border-b-2 border-b-black pb-12 mt-[4.375rem] mx-[10.625rem] flex flex-col justify-start items-center">
            <div className="flex justify-around mt-20">
                <div className="mr-[4.031rem]">
                <Image src={"/images/osmoclick.svg"} width={495} height={603}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                </div>
                <div className="mt-[12.5rem] ml-[4.031rem]">
                    <Image src={"/images/osmocross.svg"} width={390} height={475}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                </div>
            </div>
            <div className="flex justify-around items-start mt-20">
                <div className="mr-[2.906rem]">
                    <Image src={"/images/chemcoding.svg"} width={551} height={741}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    <div className="font-extrabold text-[64px] tracking-widest mt-12">
                        Memories <br></br> and learnings <br></br>woven together!
                    </div>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="mt-[3.188rem] ml-[2.906rem] mb-[5.5rem]">
                        <Image src={"/images/chess.svg"} width={448} height={300}/>
                        <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    </div>
                    <div className="mt-[5.5rem] ml-[6.157rem]">
                        <Image src={"/images/udyog.svg"} width={455} height={391}/>
                        <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}