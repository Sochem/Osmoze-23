import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="px-16 fixed w-full top-0">
			<div className="bg-[#ffffff] border-b-black border-b-2">
				<div className="hidden sm:flex flex-row items-center justify-between py-1">
					<div className="flex m-0">
						<Image
							src="/images/Osmoze.svg"
							width={87}
							height={87}
							alt="Osmoze"
						/>
					</div>

					<div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-16 font-medium">
						<div>
							<Link href="/events">
								<button className="2xl:text-xl underline-offset-4 hover:underline">
									EVENTS
								</button>
							</Link>
						</div>

						<div>
							<Link href="/announcement">
								<button className="2xl:text-xl underline-offset-4 hover:underline">
									ANNOUNCEMENT
								</button>
							</Link>
						</div>

						<div>
							<Link href="/aboutUs">
								<button className="2xl:text-xl underline-offset-4 hover:underline">
									ABOUT US
								</button>
							</Link>
						</div>

						<div>
							<Link href="/team">
								<button className="2xl:text-xl underline-offset-4 hover:underline">
									TEAM
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
