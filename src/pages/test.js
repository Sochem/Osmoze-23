import Cursor from "@/components/cursor";
import { useEffect, useRef, useState } from "react";

export default function Test(){

    // const ref1 = useRef(null);
    // const ref2 = useRef(null);

    // const [scene,setScene] = useState({})
    // const [magic,setMagic] = useState({})

    // const [x,setX] = useState({})
    // const [y,setY] = useState({})

    // const [pos,setPos] = useState({x:0,y:0})

    // useEffect(()=>{
    //     setScene(ref1.current)
    //     setMagic(ref2.current)
    // },[])
    
    // const handleMouseMove = (e) => {
    //         setX(e.pageX)
    //         setY(e.pageY)
    // }
    // const magicWhalf = magic.width/2

    //onMouseMove={(e)=>handleMouseMove(e)} ref={ref1}
    
    return(
        <div className="scene">
            {/* <div style={{
                left: `${x - magicWhalf}`,
                top: `${y - magicWhalf}`
            }} ref={ref2} className="magic"></div> */}
            <Cursor/>
        </div>
    )
}