import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";
import { useEffect } from "react";
import Footer from "./footer";

export default function IndividualEvent() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			let scroll = window.scrollY;
			let body = document.querySelector(".mainAll");
			if (scroll > 150) {
				body.style.background = "white";
				body.style.opacity = "1";
			}
			if (scroll < 150) {
				body.style.background = "#FFDB01";
				body.style.opacity = "1";
			}
		});
	}, []);

	return (
		<div className="mainAll">
			<Navbar/>
			<div className="px-40 w-full pb-[55px] flex flex-col items-center h-auto pt-36">
				<div className=" text-6xl font-bold">ADHYAN</div>
				<div className=" bg-[#FFDB01] h-[654px] w-[654px] flex justify-center rounded-full mb-[118px]">
					<Image
						className=" z-5"
						src="/images/events.svg"
						height={508}
						width={508}
						alt="image"
					/>
				</div>
				<div className=" text-4xl font-light text-justify items-center flex flex-col">
					<div className=" items-center flex flex-col mb-32">
						<div className=" text-6xl font-normal mb-6">
							ABOUT EVENT
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur. Tincidunt
							leo turpis nam semper. Scelerisque eget orci
							volutpat diam facilisi orci habitasse netus
							fermentum.
						</div>
					</div>
					<div className=" items-center flex flex-col">
						<div className=" text-6xl font-normal mb-6">
							Announcement
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur. Tincidunt
							leo turpis nam semper. Scelerisque eget orci
							volutpat diam facilisi orci habitasse netus
							fermentum.
						</div>
					</div>
					<button className=" text-2xl font-normal tracking-widest rounded-lg w-80 h-16 bg-slate-700 text-white flex items-center justify-center mt-9 mb-6 bg-gradient-to-br from-[#052528] to-[#094B48]">
						Problem Statement
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
