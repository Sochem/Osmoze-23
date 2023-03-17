import Image from "next/image";
import React, { useEffect } from 'react';




export default function Carousel() {
    return (
        <div className="carousel">
            <div id="expandable">
                <div className="text-1">
                    Commemorate joy, happiness and festivity in
                </div>
                <div className="text-2">
                    Exciting <br></br>&nbsp; &nbsp; &nbsp; &nbsp; Events
                </div>
            </div>


            <div className="hidden border-b-2 border-b-black pb-12  mx-[10.625rem] sm:flex flex-col justify-start items-center">
                <div className="flex justify-around mt-20">
                    <div className="mr-[4.031rem]">
                        <Image src={"/images/osmoclick.svg"} width={495} height={603} />
                        <div className="tracking-widest text-[20px] font-medium">Freeze Time And Relive The Memories<br></br>A Photography Pre-event Competition</div>
                    </div>
                    <div className="mt-[12.5rem] ml-[4.031rem]">
                        <Image src={"/images/osmocross.svg"} width={390} height={475} />
                        <div className="tracking-widest text-[20px] font-medium">A CrossWord Competition</div>
                    </div>
                </div>
                <div className="flex justify-around items-start mt-20">
                    <div className="mr-[2.906rem]">
                        <Image src={"/images/chemcoding.svg"} width={551} height={741} />
                        <div className="tracking-widest text-[20px] font-medium">Prove That AI Still Needs To Catch Up <br></br> A Coding Competition</div>
                        <div className="font-extrabold text-[64px] tracking-widest mt-12">
                            Memories <br></br> and learnings <br></br>woven together!
                        </div>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="mt-[3.188rem] ml-[2.906rem] mb-[5.5rem]">
                            <Image src={"/images/chess.svg"} width={448} height={300} />
                            <div className="tracking-widest text-[20px] font-medium">Where The Art Of War Meets The Science Of Logic<br></br>A Chess Competition</div>
                        </div>
                        <div className="mt-[5.5rem] ml-[6.157rem]">
                            <Image src={"/images/udyog.svg"} width={455} height={391} />
                            <div className="tracking-widest text-[20px] font-medium">A Chemical Core Case Study Competition</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:hidden">
                <div>
                    <Image src={'/images/chemcoding.svg'} width={233} height={255} />
                    <p className="pt-2 text-center">Loren impsum</p>
                </div>
                <div>
                    <Image src={'/images/osmoclick.svg'} width={233} height={255} />
                    <p className="pt-2 text-center">Loren impsum</p>
                </div>
                <div>
                    <Image src={'/images/chess.svg'} width={233} height={255} />
                    <p className="pt-2 text-center">Loren impsum</p>
                </div>
                <div className="pt-4 mb-12 text-center text-[32px] font-extrabold tracing-widest">
                    Memories<br></br>and learnings<br></br>woven together
                </div>
            </div>
        </div>
    )
}