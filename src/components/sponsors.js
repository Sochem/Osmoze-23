import Image from "next/image";
import { useState } from "react";

const sponsors = [
    ['sponsor.svg','sponsor.svg','sponsor.svg'],
    ['sponsor.svg','sponsor.svg','sponsor.svg']
]

export default function Sponsors(){

    const [data, setData] = useState(0);

    const handleRightClick = () => {
        if (data == sponsors.length - 1){
            setData(0)
        }else{
            setData(data+1)
        }
    }
    const handleLeftClick = () => {
        if (data == 0){
            setData(sponsors.length - 1)
        }else{
            setData(data-1)
        }
    }

    return(
        <div className="flex flex-col items-center pb-12 mt-[14rem] mx-[10.625rem]">
            <div className="font-extrabold text-[36px] tracking-wider">Meet our</div>
            <div className="font-extrabold text-[64px] tracking-wider">sponsors</div>
            <div className="flex justify-around mt-32 items-center">
                <div>
                    <button onClick={handleLeftClick}>
                        <Image src={"/images/left.svg"} width={68} height={119}/>
                    </button>
                </div>
                <div className="mx-[6.5rem] flex">
                    {sponsors[data].map((item)=>{
                        return(
                            <div className="mr-[4.813rem]"><Image src={`/images/${item}`} width={222} height={202}/></div>
                        )
                    })}
                </div>
                <div>
                    <button onClick={handleRightClick}>
                        <Image src={"/images/right.svg"} width={68} height={119}/>
                    </button>
                </div>
            </div>
        </div>
    )
}