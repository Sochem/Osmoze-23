import Image from "next/image";
// import { delay, motion } from "framer-motion";

export default function NextButton(){
    return(
        <div className="text-button mr-14">
			<div className="text-2-button mr-6">
                
            Explore all events <br></br>and sessions 
            
            </div>
            <button>
           
                <Image src={"/images/midbutton.svg"} width={82} height={82}/>
                
            </button>
        </div>
    )
}