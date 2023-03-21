import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Announcementcard from "../components/announcementHelper";

const announcement = () => {


    useEffect(() => {
		window.addEventListener("scroll", () => {
			let scroll = window.scrollY;
			let body = document.querySelector(".bigBox");
			let canteen = document.querySelector(".heading");

			if (scroll >= 400) {
				body.style.background = "white";
				body.css = "white";
				
			}
			else{
				body.style.background = "#4B5EBF";
			}
			
		});
	}, []);

	return (
		<div className="bigBox">
			<Navbar />
			<div className="aHead">
                <div className="heading">ANNOUNCEMENT</div>
				<div className="imgg">
					<Image
						src="/images/announcement.svg"
						alt=""
						width={401}
						height={451}
					/>
				</div>
				<div className="subHeading">Latest Update</div>
                <Announcementcard/>
                <Announcementcard/>
			</div>
			<Footer />
		</div>
	);
};

export default announcement;
