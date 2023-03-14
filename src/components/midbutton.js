import Image from "next/image";

export default function Midbutton(){
    return(
        <div className="my-4 mx-[10.625rem] flex justify-end">
            <div className="px-4 text-[24px] font-medium flex items-center text-right">
            Click to explore the <br></br>Day of the Festival!
            </div>
            <button>
                <Image src={"/images/midbutton.svg"} width={82} height={82}/>
            </button>
        </div>
    )
}