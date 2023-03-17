import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const teamPage = () => {
  return (
      <div className="team">
          <Navbar></Navbar>
      <div className="mainTitle">Sochem Team</div>
      <div className="hidden sm:flex justify-center mt-[7rem]">
        <Image src={"/images/group photo.svg"} width={1090} height={524} />
          </div>
          <Footer></Footer>
    </div>
  );
};

export default teamPage;
