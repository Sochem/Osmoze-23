import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="footer pl-10 pr-10 pb-10 pt-[50px]">
			<div className="flex flex-row border-b-[1px] border-white justify-between pb-[60px]">
				<div className="flex flex-row text-white">
					<Image
						src="/images/Osmoze.svg"
						width={150}
						height={150}
						alt="Osmoze"
					/>
					<div className=" font-light text-2xl pt-5">
						<div className=" font-extrabold text-2xl pb-5">
							Osmoze'23
						</div>
						The Annual<br></br>
						Chemical Extravaganza
					</div>
				</div>

				<div className="flex flex-col text-xl text-white pt-5 pr-32">
					
					<div className="flex font-extrabold flex-row sm:flex-row">
						Contact Us
						<div className=" pr-5 pl-10 font-normal">Aditya Kumar Singh</div>
						<div className="font-normal font-normal">+919507510924</div>
					</div>


					<div className="flex flex-row  font-extrabold items-center">
						Follow Us
						<div className="footer-text-2 pl-6">
							<div className="img">
								<Link href="https://www.facebook.com/Osmoze.IITBHU?mibextid=ZbWKwL">
									<Image
										src="/images/social1.svg"
										width={30}
										height={30}
									/>
								</Link>
							</div>
							<div className="img">
								<Link href="https://www.instagram.com/sochem_iitbhu/">
									<Image
										src="/images/social2.svg"
										width={30}
										height={30}
									/>
								</Link>
							</div>
							<div className="img">
								<Link href="https://www.linkedin.com/company/osmoze-iit-bhu-/">
									<Image
										src="/images/social3.svg"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-white text-xs text-center pt-6">© 2023 All Rights Reserved</div>
		</div>
	);
}
