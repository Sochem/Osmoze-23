import React from 'react'
import Card from './../components/eventscardhelper';
import data from './../../data/data';



const eventscard = (props) => {

  const type = props.type

  return (
    <div className="bg-[#FFFFFF]">
    <div className="cards">
      {data.events.map((item) => {
        if(type==="10"){
            return (
              <a href="#">
              <div>
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  designation={item.designation}
                  review={item.review}
                />
              </div>
              </a>
            );
          }
          else if (item.type === type) {
            return (
                <a href="#">
              <div>
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  designation={item.designation}
                  review={item.review}
                />
              </div>
              </a>
            );
          }
          else {
            return (
              <></>
            );
          }
        })}
      </div>
    </div>
  )
}


export default eventscard