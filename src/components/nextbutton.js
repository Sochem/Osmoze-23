import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function NextButton(){
    return(
        <div className="text-button">
            <div className="text-2-button">
                <motion.div initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration:3,delay:7 }}
>
            Explore all events <br></br>and sessions <br></br> &nbsp;&nbsp;
            </motion.div>
            </div>
            <button>
            <motion.div
  animate={{
    x: ['-200px', '0px'] ,
    opacity:1
  }}
  initial={{opacity:0}}
  transition={{duration:3,delay:7}}
>
                <Image src={"/images/midbutton.svg"} width={82} height={82}/>
                </motion.div>
            </button>
        </div>
    )
}