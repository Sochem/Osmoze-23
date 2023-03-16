import Image from "next/image";
export default function Card(props) {
    return (
      <div className="card-inner">
        <p className="heading">
          {props.name}
        </p>
        <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#FFFFFF]">
          {props.designation}
        </p>
        <div>
            <Image
            alt="Image"
            src={props.image}
            width={200}
            height={200}
            />
        </div>
        <a className="content py-2" href={props.review}>
          Link
        </a>
      </div>
    );
  }