import Image from "next/image";
// import { delay, motion } from "framer-motion";

export default function Team() {
    return (
        <div className="mt-[19.375rem] sm:mx-[10.625rem] pb-28 border-b-2 border-b-black">

            <div className="flex flex-col sm:flex-row justify-center">
                <div className="hidden sm:block text-right mr-12 font-extrabold text-[64px] tracking-widest">Meet the Team <br></br>2022-23</div>
                <div className="hidden sm:block px-16 text-left ml-12 font-extrabold text-[36px] tracking-widest">Know the amazing<br></br> individuals who make <br></br>our team a winning<br></br>combination.</div>
                <div className="sm:hidden text-center font-extrabold text-[24px] tracking-widest">Meet the Team <br></br>of 2022-23</div>
            </div>

            <div className="hidden sm:flex justify-center mt-[7rem]">
                <Image src={"/images/group photo.svg"} width={1090} height={524} />
            </div>
            <div className="sm:hidden flex justify-center mt-12">
                <Image src={"/images/group photo.svg"} width={284} height={142} />
            </div>
        </div>
    )
}