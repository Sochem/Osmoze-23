import Image from "next/image";
import Link from "next/link";
// import { delay, motion } from "framer-motion";

export default function NextButton(){
    return(
        <div>

            <div className="hidden sm:block" >
                <div className="text-button mr-14">
                    <div className="text-2-button mr-6">
                    <Link href="/events">
                        
                        Explore all events <br></br>and sessions 
                        </Link>
                    
                    </div>
                    <button>
                    <Link href="/events">
                
                        <Image src={"/images/midbutton.svg"} width={82} height={82}/>
                        </Link>
                        
                    </button>
                </div>
            </div>
            <div className="sm:hidden mt-12">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-[20px] font-medium tracking-wider">
                    <Link href="/events">
                        
                        Click to explore the <br></br>Day of the Festival!
                        </Link>
                    </div>
                    <button className="mt-4">
                    <Link href="/events">
                        <Image src={"/images/midbutton.svg"} width={62} height={62}/>  
                        </Link>  
                    </button>
                </div>
            </div>
        </div>
    )
}