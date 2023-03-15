import Image from "next/image"
import { useEffect} from "react";

export default function Hero(){

    useEffect(()=>{
        let magic  = document.querySelector(".magic")
        let magicWHalf = magic.offsetWidth/2;

        document.body.addEventListener('mousemove',function(e){
            magic.style.left = e.pageX - magicWHalf+'px';
            magic.style.top = e.pageY - magicWHalf+'px';
        });
        
    },[])

    return(
        <div className="relative overflow-hidden z-10 pt-12">
            <div className="magic"></div>
            <div className="mt-[6rem] mx-[10.625rem] flex justify-around border-b-black border-b-2 pb-16">
                <div className="z-20 flex flex-col justify-center items-start">
                    <div className="font-medium text-[24px] tracking-widest">
                        Welcome to Annual<br></br>
                        Chemical Extravaganza
                    </div>
                    <div className="font-extrabold text-[64px] text-[#1F8893] tracking-widest">
                        OSMOZE '23
                    </div>
                    <div>
                        <button className="font-medium text-[24px] text-white rounded-lg px-8 py-2 bg-gradient-to-r from-[#1CD1CC] to-[#6B68E5]">
                            Register
                        </button>
                    </div>
                </div>
                <div className="z-20">
                    <Image src={"/images/hero-logo.svg"} width={501} height={501}/>
                </div>
            </div>
        </div>
    )
}