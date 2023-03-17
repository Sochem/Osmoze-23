import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const sponsors = [
    ['sponsor.svg','sponsor.svg','sponsor.svg'],
    ['sponsor.svg','sponsor.svg','sponsor.svg']
]
const sponsorsPhone = [
    ['sponsor.svg'],
    ['sponsor.svg'],
    ['sponsor.svg'],
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
        <div className="flex flex-col items-center pb-12 mt-[14rem] sm:mx-[10.625rem]">
            <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5,0.71,1, 1.5],
                    delay:10
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
            <div className="font-extrabold items-center text-center sm:text-[36px] tracking-wider">Meet our</div>
            <div className="font-extrabold items-center text-center sm:text-[64px] tracking-wider">sponsors</div>
            </motion.h1>
            <div className="flex justify-around mt-32 items-center">
                <div className="hidden sm:block">
                    <button onClick={handleLeftClick}>
                        <Image src={"/images/left.svg"} width={68} height={119}/>
                    </button>
                </div>
                <div className="sm:hidden block">
                    <button onClick={handleLeftClick}>
                        <Image src={"/images/left.svg"} width={26} height={49}/>
                    </button>
                </div>
                <div className="hidden mx-[6.5rem] sm:flex">
                    {sponsors[data].map((item)=>{
                        return(
                            <div className="mx-[4.813rem]"><Image src={`/images/${item}`} width={222} height={202}/></div>
                        )
                    })}
                </div>
                <div className="sm:hidden flex">
                    {sponsorsPhone[data].map((item)=>{
                        return(
                            <div className=""><Image src={`/images/${item}`} width={105} height={108}/></div>
                        )
                    })}
                </div>
                <div className="hidden sm:block">
                    <button onClick={handleRightClick}>
                        <Image src={"/images/right.svg"} width={68} height={119}/>
                    </button>
                </div>
                <div className="sm:hidden block">
                    <button onClick={handleRightClick}>
                        <Image src={"/images/right.svg"} width={26} height={49}/>
                    </button>
                </div>
            </div>
        </div>
    )
}