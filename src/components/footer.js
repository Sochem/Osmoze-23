import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="footer">
			<div className="content1">
			<div className="image">
				<img src="/images/footerImage.svg"/>
			</div>

			<div className="text">
				<div className="footer-text">Osmoze2023</div>
				<div  className="footer-text-2">
				<div  className="img"><Link href="https://www.facebook.com"><Image src="/images/social1.svg" width={40} height={40}/></Link></div>
				<div  className="img"><Link href="https://www.instagram.com"><Image src="/images/social2.svg" width={40} height={40}/></Link></div>
				<div  className="img"><Link href="https://www.linkedin.com"><Image src="/images/social3.svg" width={40} height={40}/></Link></div>
				</div>
				<div className="footer-text-3">
					<div className="contact"><div className="cc">Contact</div><br></br>9199999999</div>
					<div className="contact"><div className="cc">Contact</div><br></br>9199999999</div>
				</div>
			</div>
			</div>
		</div>
	);
}
