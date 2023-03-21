import Image from "next/image";
// import { delay, motion } from "framer-motion";

export default function NextButton(){
    return(
        <div>

            <div className="hidden sm:block">
                <div className="text-button mr-14">
                    <div className="text-2-button mr-6">
                        
                        Explore all events <br></br>and sessions 
                    
                    </div>
                    <button>
                
                        <Image src={"/images/midbutton.svg"} width={82} height={82}/>
                        
                    </button>
                </div>
            </div>
            <div className="sm:hidden mt-12">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-[20px] font-medium tracking-wider">
                        Click to explore the <br></br>Day of the Festival!
                    </div>
                    <button className="mt-4">
                        <Image src={"/images/midbutton.svg"} width={62} height={62}/>    
                    </button>
                </div>
            </div>
        </div>
    )
}