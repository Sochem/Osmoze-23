import Image from "next/image";

export default function Carousel(){
    return(
        <div className="border-b-2 border-b-black pb-12 mt-[4.375rem] mx-[10.625rem] flex flex-col justify-start items-center">
            <div className="font-extrabold text-[36px] tracking-widest">
                Lorem ipsum dolor sit 
            </div>
            <div className="font-extrabold text-[64px] tracking-widest text-center">
                Exciting <br></br> Competitions
            </div>
            <div className="flex justify-around mt-20">
                <div className="mr-[4.031rem]">
                    <Image src={"/images/yellow.svg"} width={495} height={603}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                </div>
                <div className="mt-[12.5rem] ml-[4.031rem]">
                    <Image src={"/images/green.svg"} width={390} height={475}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                </div>
            </div>
            <div className="flex justify-around items-start mt-20">
                <div className="mr-[2.906rem]">
                    <Image src={"/images/blue.svg"} width={551} height={741}/>
                    <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    <div className="font-extrabold text-[64px] tracking-widest mt-12">
                        Memories <br></br> and learnings <br></br>woven together!
                    </div>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="mt-[3.188rem] ml-[2.906rem] mb-[5.5rem]">
                        <Image src={"/images/orange.svg"} width={448} height={300}/>
                        <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    </div>
                    <div className="mt-[5.5rem] ml-[6.157rem]">
                        <Image src={"/images/lemon.svg"} width={455} height={391}/>
                        <div className="tracking-widest text-[20px] font-medium">Lorem impsum dolor sit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}