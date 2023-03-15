import React, { useState } from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Cards from '../components/eventscard'
const events = () => {

  const [type, setType] = useState({});
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);
  const [icon4, setIcon4] = useState(false);
  const [icon5, setIcon5] = useState(false);
  const [icon6, setIcon6] = useState(false);


  function handleEventClick(eventType) {
    // alert("it works :)");
    setType(eventType);
  }
  return (
    <div>
    <Navbar />
    
  <div
    class="title"
  >
    
      <h1
        class="head"
      >
        Exciting Pool Of Events

        {/* <span class="sm:block"> Increase Conversion. </span> */}
      </h1>

      {/* <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p> */}

      <div class="nav">
        <a
          onClick={(e) => handleEventClick("10")}
          onMouseEnter={(e) => setIcon1(true)}
          onMouseLeave={(e) => setIcon1(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
          
        >
         
          {icon1 ? <div>&#9209;</div> :  <div>&#9830;</div> } ALL EVENTS   
        </a>
        <a 
          onClick={(e) => handleEventClick("1")}
          onMouseEnter={(e) => setIcon2(true)}
          onMouseLeave={(e) => setIcon2(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon2 ? <div>&#9209;</div> :  <div>&#9830;</div> }PRE EVENTS
        </a>
        <a
          onClick={(e) => handleEventClick("2")}
          onMouseEnter={(e) => setIcon3(true)}
          onMouseLeave={(e) => setIcon3(false)}
          class="block w-full px-14 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon3 ? <div>&#9209;</div> :  <div>&#9830;</div> }BIG-4
        </a>
        <a
          onClick={(e) => handleEventClick("3")}
          onMouseEnter={(e) => setIcon4(true)}
          onMouseLeave={(e) => setIcon4(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon4 ? <div>&#9209;</div> :  <div>&#9830;</div> }CORE
        </a>
        <a
          onClick={(e) => handleEventClick("4")}
          onMouseEnter={(e) => setIcon5(true)}
          onMouseLeave={(e) => setIcon5(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon5 ? <div>&#9209;</div> :  <div>&#9830;</div> }SPORTS
        </a>
        <a
          onClick={(e) => handleEventClick("5")}
          onMouseEnter={(e) => setIcon6(true)}
          onMouseLeave={(e) => setIcon6(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon6 ? <div>&#9209;</div> :  <div>&#9830;</div> }ABRACADABRA
        </a>
      
    </div>
  </div>

<Cards type={type}/>
<Footer/>
</div>
  )
}

export default events