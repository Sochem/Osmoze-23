import React from 'react'
import Image from "next/image";

const styles = {
    maincontent:{
        display: "flex"


    },
    contentright: {
        display: "flex"

    },
    contentleft:{
        display: "flex"

    }
  };

const mystyle = {
    color: "white",
    backgroundImage: "url('./team.svg')",
    backgroundColor: "DodgerBlue",
    fontFamily: "Arial"
};

const about = () => {
    return (
        <div>
            <div className='headingmain'
                style={mystyle}><div className='aboutdata'></div>
            </div>

            <div className='maincontent' style={styles.maincontent}>
                <div className='contentleft' style={styles.contentleft}>
                <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div className='contentright' style={styles.contentright}>
                    <h1>Our Vision</h1>
                    <p>The society involves various budding chemical engineers from all the years. The society provides a platform for students to improve on their skills & personality. It also brings back the experience of our esteemed alumni for the benefit of the students. Various activities such as workshops, GDs, case studies, placement & internship sessions are organized by the society throughout the year.
                        The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.</p>
                </div>
                <div className='contentleft' style={styles.contentleft}>
                <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div className='contentright' style={styles.contentright}>
                    <h1>Our Vision</h1>
                    <p>The society involves various budding chemical engineers from all the years. The society provides a platform for students to improve on their skills & personality. It also brings back the experience of our esteemed alumni for the benefit of the students. Various activities such as workshops, GDs, case studies, placement & internship sessions are organized by the society throughout the year.
                        The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.</p>
                </div>
            </div>

        </div>
    )
}

export default about