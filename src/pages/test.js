import { useEffect} from "react";

export default function Test(){

    useEffect(()=>{
        let magic  = document.querySelector(".magic")
        let magicWHalf = magic.offsetWidth/2;

        document.body.addEventListener('mousemove',function(e){
            magic.style.left = e.pageX - magicWHalf+'px';
            magic.style.top = e.pageY - magicWHalf+'px';
        });
        
    },[])
    
    return(
        <div className="container">
            <div className="magic"></div>
        </div>
    )
}