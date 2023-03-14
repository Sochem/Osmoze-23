import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="px-16 w-full bg-[#263238] h-[444px] pb-[55px]">
			<div className="border-b-[1px] border-white flex flex-row">
			<div className="flex flex-row justify-center align-bottom w-1/2">
				<Image src="/images/footerImage.svg" width={ 425.76} height={256.47} />
			</div>

			<div className="text-white pt-[50px] w-1/2">
				<div className="text-4xl">Osmoze©2023</div>
				<div  className="flex flex-row gap-[52px] pt-[79px] pb-[96px]">
					<Link href="https://www.facebook.com"><Image src="/images/social1.svg" width={40} height={40}/></Link>
					<Link href="https://www.instagram.com"><Image src="/images/social2.svg" width={40} height={40}/></Link>
					<Link href="https://www.linkedin.com"><Image src="/images/social3.svg" width={40} height={40}/></Link>
				</div>
				<div className="text-xl flex-row flex gap-[112px] pb-[38px]">
					<div>Contact<br></br>9199999999</div>
					<div>Contact<br></br>9199999999</div>
				</div>
			</div>
			</div>
		</div>
	);
}
