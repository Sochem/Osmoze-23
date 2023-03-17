import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Midbutton() {
	return (
		<div className="text-button mr-14">
			<div className="text-2-button mr-6">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 3, delay: 4 }}
				>
					Click to explore the <br></br>Day of the Festival!
				</motion.div>
			</div>
			<button>
				<motion.div
					animate={{
						x: ["-200px", "0px"],
						opacity: 1,
					}}
					initial={{ opacity: 0 }}
					transition={{ duration: 3, delay: 4 }}
				>
					<Image
						src={"/images/midbutton.svg"}
						width={82}
						height={82}
					/>
				</motion.div>
			</button>
		</div>
	);
}
