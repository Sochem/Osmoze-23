import Navbar from '@/components/navbar'
import Footer from "../components/footer"
import React from 'react'
import Image from "next/image"

const about = () => {
    return (
        <div>
  {/* Hello world */}
  <Navbar></Navbar>
  <div>
  <section className="section2" id="AboutUs">
    <table className='mt-[17rem]'>
      <tbody>
        <tr>
          <td>
          <Image src={"/images/image 38.svg"} width={720} height={593} style ={{background: "#7EAF4B"}}/>
          </td>
          <td>
            <span className="title1">About Us</span>
            <span className="sub-title">
            Who are we?
            </span>
            <p>
            The society involves various budding chemical engineers from all the years. The society provides a platform for students to improve on their skills & personality. It also brings back the experience of our esteemed alumni for the benefit of the students. Various activities such as workshops, GDs, case studies, placement & internship sessions are organized by the society throughout the year.
            </p>
            <p>
            The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="section3" id="OurMission">
    <table>
      <tbody>
        <tr>
          <td>
            <span className="title2">Our Mission</span>
            <p>
            The society involves various budding chemical engineers from all the years. The society provides a platform for students to improve on their skills & personality. It also brings back the experience of our esteemed alumni for the benefit of the students. Various activities such as workshops, GDs, case studies, placement & internship sessions are organized by the society throughout the year.

            </p>
            <p>
            The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.

            </p>
          </td>
          <td>
           <Image src={"/images/Group 4678.svg"} width={720} height={593} style ={{background: "#FFB109"}}/>
          </td>
        </tr>
      </tbody>
      {/* <Footer> </Footer> */}
    </table>
  
  
  </section>
  </div>
  <Footer> </Footer>
</div>

    )
}

export default about