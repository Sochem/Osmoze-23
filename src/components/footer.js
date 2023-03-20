import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="footer">
			<div className="content1">
				<div className="hidden sm:block image">
					<img src="/images/footerImage.svg" />
				</div>

				<div className="text">
					<div className="footer-text"><b>Osmoze'23</b></div>
					<div className="footer-text-2">
						<div className="img"><Link href="https://www.facebook.com"><Image src="/images/social1.svg" width={40} height={40} /></Link></div>
						<div className="img"><Link href="https://www.instagram.com"><Image src="/images/social2.svg" width={40} height={40} /></Link></div>
						<div className="img"><Link href="https://www.linkedin.com"><Image src="/images/social3.svg" width={40} height={40} /></Link></div>
					</div>
					<div className="flex flex-col sm:flex-row">
						<div className="p-6 text-[24px]">
							<div className="cc">Aditya Kumar Singh</div>
						    <div>+91 9507510924</div>
						</div>
						<div className="p-6 text-[24px]">
							<div className="cc">Prince</div>
						    <div>+91 9065765411</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
