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
					<div className="footer-text">Osmoze'23</div>
					<div className="footer-text-2">
						<div className="img"><Link href="https://www.facebook.com"><Image src="/images/social1.svg" width={40} height={40} /></Link></div>
						<div className="img"><Link href="https://www.instagram.com"><Image src="/images/social2.svg" width={40} height={40} /></Link></div>
						<div className="img"><Link href="https://www.linkedin.com"><Image src="/images/social3.svg" width={40} height={40} /></Link></div>
					</div>
					<div className="footer-text-1">
						<div className="contact"><div className="cc">Aditya Kumar Singh</div><br></br>+91 9507510924</div>
						<div className="contact"><div className="cc">Prince</div><br></br>+91 9065765411</div>
					</div>
				</div>
			</div>
		</div>
	);
}
