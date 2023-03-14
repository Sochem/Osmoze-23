import React, { useState } from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Cards from '../components/eventscard'
const events = () => {

  const [type, setType] = useState({});

  function handleEventClick(eventType) {
    // alert("it works :)");
    setType(eventType);
  }

  return (
    <div>
    <Navbar />
    <section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Exciting Pool Of Events

        {/* <span class="sm:block"> Increase Conversion. </span> */}
      </h1>

      {/* <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p> */}

      <div class="mt-8 flex justify-center gap-4">
        <a
          onClick={(e) => handleEventClick("10")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          ALL EVENTS
        </a>
        <a 
          onClick={(e) => handleEventClick("1")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          PRE EVENTS
        </a>
        <a
          onClick={(e) => handleEventClick("2")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-14 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          BIG-4
        </a>
        <a
          onClick={(e) => handleEventClick("3")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          CORE
        </a>
        <a
          onClick={(e) => handleEventClick("4")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          SPORTS
        </a>
        <a
          onClick={(e) => handleEventClick("5")}
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          ABRACADABRA
        </a>
      </div>
    </div>
  </div>
</section>
<Cards type={type}/>
<Footer/>
</div>
  )
}

export default events