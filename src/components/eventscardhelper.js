import Image from "next/image";
import { useState } from 'react';

export default function Card(props) {
  const colors = ['#FC7021', '#1A97BA', '#188457', '#7EAF4B', '#753B9C', '#C9522D', '#4557B4', '#EC368B', '#FFB109'];


  const [backgroundColor, setBackgroundColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const style = {
    backgroundColor,
  };
  

  
    return (
      <div className="card-inner" style={style} href={props.review}>
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
        
      </div>
    );
  }