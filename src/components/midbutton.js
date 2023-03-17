import Image from "next/image";


export default function Midbutton() {
	return (
		<div className="text-button mr-14">
			<div className="text-2-button mr-6">
				
					Click to explore the <br></br>Day of the Festival!
				
			</div>
			<button>
			<div className="button-image-n">
				
					<Image
						src={"/images/midbutton.svg"}
						width={82}
						height={82}
					/>
					</div>
				
			</button>
		</div>
	);
}
