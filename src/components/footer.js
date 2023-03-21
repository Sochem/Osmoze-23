import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="footer p-14">
			<div className="content1 border-b-[1px] border-white">
				<div className="image">
					<Image
						src="/images/footerImage.svg"
						width={640}
						height={640}
					/>
				</div>

				<div className="text">
					<div className="footer-text">Osmoze'2023</div>
					<div className="footer-text-2">
						<div className="img">
							<Link href="https://www.facebook.com/Osmoze.IITBHU?mibextid=ZbWKwL">
								<Image
									src="/images/social1.svg"
									width={40}
									height={40}
								/>
							</Link>
						</div>
						<div className="img">
							<Link href="https://www.instagram.com/sochem_iitbhu/">
								<Image
									src="/images/social2.svg"
									width={40}
									height={40}
								/>
							</Link>
						</div>
						<div className="img">
							<Link href="https://www.linkedin.com/company/osmoze-iit-bhu-/">
								<Image
									src="/images/social3.svg"
									width={40}
									height={40}
								/>
							</Link>
						</div>
					</div>
          
					<div className="flex flex-col sm:flex-row">
						<div className="p-6 text-[24px]">

							<div className="cc">Aditya Kumar Singh</div>
							<br></br>+91 9507510924
						</div>
						<div className="p-6 text-[24px]">
							<div className="cc">Prince</div>
							<br></br>+91 9065765411
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
