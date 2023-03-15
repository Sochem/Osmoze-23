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
          
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
          
        >
         
            <div class="hover">&#9632;</div> ALL EVENTS   
        </a>
        <a 
          onClick={(e) => handleEventClick("1")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>PRE EVENTS
        </a>
        <a
          
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>BIG-4
        </a>
        <a
          onClick={(e) => handleEventClick("3")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>CORE
        </a>
        <a
          onClick={(e) => handleEventClick("4")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>SPORTS
        </a>
        <a
          onClick={(e) => handleEventClick("5")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>ABRACADABRA
        </a>
      
    </div>
  </div>

<Cards type={type}/>
<Footer/>
</div>
  )
}

export default events