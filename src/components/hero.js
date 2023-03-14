import Image from "next/image"

export default function Hero(){
    return(
        <div className="mt-[10.375rem] mx-[10.625rem] flex justify-around border-b-black border-b-2 pb-16">
            <div className="flex flex-col justify-center items-start">
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
            <div>
                <Image src={"/images/hero-logo.svg"} width={501} height={501}/>
            </div>
        </div>
    )
}