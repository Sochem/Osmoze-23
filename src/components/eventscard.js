import React from 'react'
import Card from './../components/eventscardhelper';
// import data from './../../data/data';



const eventscard = (props) => {

  const type = props.type;
  const data = props.docs;
  console.log("props: ", props);

  return (
    <div className="bg-[#FFFFFF]">
    <div className="cards">
      {data.map((item) => {
        if(item.Type===type){
          console.log(item.Cover);
            return (
              <a href="#">
              <div>
                <Card
                  key={item.id}
                  name={item.Title}
                  image={item.Cover}
                  designation={item.description}
                  review={item.RegistrationLink}
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