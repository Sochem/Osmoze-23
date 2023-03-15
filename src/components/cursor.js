import { useEffect, useState } from "react"

export default function Cursor(){

    const [pos,setPos] = useState({x:0,y:0})

    useEffect(()=>{
        const addEventListeners = () => {
            document.addEventListener('mousemove',handleMove);
          };
      
          const removeEventListeners = () => {
            document.removeEventListener('mousemove', handleMove);
      
          };
      
          const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
          };
        
          addEventListeners();
          return () => removeEventListeners();
    }, []);

    return(
        <div style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }} className="magic"></div>

          //fixed rounded-full w-24 h-24 border-black border-2 -translate-x-[50%] -translate-y-[50%] bg-red-900 bg-opacity-50
    )
}