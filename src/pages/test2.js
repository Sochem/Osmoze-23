import Cursor from "@/components/cursor"
import { useState,useEffect, useRef } from "react"

export default function Test2(){

    return(
        <div className="w-full h-[100vh] hover:bg-[url('/images/hero-bg.svg')] bg-transparent">
            <Cursor/>
        </div>
    )
}