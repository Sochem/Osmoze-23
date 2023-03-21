import Image from "next/image"
import { useEffect} from "react";

export default function Hero(){

    useEffect(()=>{
        let magic  = document.querySelector(".magic")
        let magicWHalf = magic.offsetWidth/2;

        document.body.addEventListener('mousemove',function(e){
            magic.style.left = e.pageX - magicWHalf+'px';
            magic.style.top = e.pageY - magicWHalf - 740 +'px';
        });
        
    },[])

    return(
        <div className="relative overflow-hidden z-10 heroSection h-screen">
            <div className="magic"></div>
            <div className="mt-[6rem] sm:mx-[10.625rem] flex flex-col sm:flex-row justify-around items-center sm:items-start sm:border-b-black sm:border-b-2 sm:pb-16">
                <div className="z-20 flex flex-col justify-center items-center sm:items-start">
                    <div className="font-medium text-[20px] sm:text-[24px] tracking-widest text-center sm:text-left">
                        Welcome to Annual<br></br>
                        Chemical Extravaganza
                    </div>
                    <div className="py-8 sm:py-0 text-center sm:text-left font-extrabold text-[30px] sm:text-[64px] text-[#1F8893] tracking-wider sm:tracking-widest">
                        OSMOZE '23
                    </div>
                    <div className="hidden sm:block">
                        <button className="font-medium text-[24px] text-white rounded-lg px-8 py-2 bg-gradient-to-r from-[#1CD1CC] to-[#6B68E5]">
                            Registrations will open soon!
                        </button>
                    </div>
                </div>
                <div className="z-20">
                    <Image src={"/images/hero-logo.svg"} width={501} height={501}/>
                </div>
                <div className="sm:hidden">
                        <button className="font-medium text-[24px] text-white rounded-lg px-8 py-2 bg-gradient-to-r from-[#1CD1CC] to-[#6B68E5]">
                            Register
                        </button>
                </div>
            </div>
        </div>
    )
}