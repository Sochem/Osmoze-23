import Image from "next/image";
import Link from "next/link";
// import { delay, motion } from "framer-motion";

export default function Midbutton() {
	return (
		
		 <div>

<div className="hidden sm:block" >
	<div className="text-button mr-14">
		<div className="text-2-button mr-6">
		<Link href="/teampage">
			
			Know the amazing <br></br>individuals who<br></br>make our team
			</Link>
		
		</div>
		<button>
		<Link href="/teampage">
	
			<Image src={"/images/midbutton.svg"} width={82} height={82}/>
			</Link>
			
		</button>
	</div>
</div>
<div className="sm:hidden mt-12">
	<div className="flex flex-col justify-center items-center">
		<div className="text-[20px] font-medium tracking-wider">
		<Link href="/teampage">
		Know the amazing <br></br>individuals who<br></br>make our team
                        </Link>
                    </div>
                    <button className="mt-4">
                    <Link href="/teampage">
                        <Image src={"/images/midbutton.svg"} width={62} height={62}/>  
                        </Link>  
                    </button>
                </div>
            </div>
        </div>
	);
}
