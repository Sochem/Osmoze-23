import Image from "next/image";
export default function Card(props) {
    return (
      <div className="bg-[#7EAF4B] border-[0.125rem] border-[#FFFFFF] min-w-[75%] h-[13rem] sm:h-[20rem] sm:min-w-[31%] flex flex-col justify-start items-center mx-4 px-2 sm:px-6 py-6 2xl:px-16 sm:mx-[1.254rem] rounded-3xl">
        <p className="font-heading font-bold text-center sm:font-semibold sm:text-[1.5rem] text-[#FFFFFF]">
          {props.name}
        </p>
        {/* <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#FFFFFF]">
          {props.designation}
        </p> */}
        <div>
            <Image
            src={props.image}
            width={200}
            height={200}
            />
        </div>
        <p className="my-4 px-2 sm:px-0 sm:mt-[3.125rem] text-justify text-[#FFFFFF] text-xs sm:text-lg overflow-auto sm:overflow-hidden sm:leading-6">
          {props.review}
        </p>
      </div>
    );
  }