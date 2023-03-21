import Image from "next/image";

export default function Card(props) {
  var colors = ['#FC7021', '#1A97BA', '#188457', '#7EAF4B', '#753B9C','#C9522D','#4557B4','#EC368B','#FFB109'];
  const style = {
    
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };

  

  
    return (
      <div className="card-inner" style={style}>
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