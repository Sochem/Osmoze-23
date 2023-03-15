import React, { useState } from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Cards from '../components/eventscard'
const events = () => {

  const [type, setType] = useState({});
  const [icon, setIcon] = useState(false);

  function handleEventClick(eventType) {
    // alert("it works :)");
    setType(eventType);
  }
  return (
    <div>
    <Navbar />
    
  <div
    class="pt-20 md:pt-25"
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
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
          
        >
         
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> } ALL EVENTS   
        </a>
        <a 
          onClick={(e) => handleEventClick("1")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> }PRE EVENTS
        </a>
        <a
          onClick={(e) => handleEventClick("2")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-14 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> }BIG-4
        </a>
        <a
          onClick={(e) => handleEventClick("3")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> }CORE
        </a>
        <a
          onClick={(e) => handleEventClick("4")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> }SPORTS
        </a>
        <a
          onClick={(e) => handleEventClick("5")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="block w-full px-12 py-3 text-sm font-medium text-[#0F8FB4] hover:bg-transparent hover:text-[#7EAF4B] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          {icon ? <div>&#9209;</div> :  <div>&#9830;</div> }ABRACADABRA
        </a>
      
    </div>
  </div>

<Cards type={type}/>
<Footer/>
</div>
  )
}

export default events