import Image from "next/image";

export default function Team(){
    return(
        <div className="mt-[19.375rem] mx-[10.625rem] pb-28 border-b-2 border-b-black">
            <div className="flex justify-center">
                <div className="text-right mr-12 font-extrabold text-[64px] tracking-widest">Meet the Team <br></br>of 2022-23</div>
                <div className="text-left ml-12 font-extrabold text-[36px] tracking-widest">Know the amazing<br></br> individuals who make <br></br>our team a winning<br></br>combination.</div>
            </div>
            <div className="flex justify-center mt-[7rem]">
                <Image src={"/images/group photo.svg"} width={1090} height={524}/>
            </div>
        </div>
    )
}