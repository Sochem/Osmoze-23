import React from 'react'
import Card from './../components/eventscardhelper';
import data from './../../data/data';


const eventscard = (props) => {

    const type = props.type

  return (
    <div className="bg-gray-900">
    <div className="grid grid-cols-3 gap-6">
      {data.events.map((item) => {
        return (
            <div>
                    <Card
                        key={item.id}
                        name={item.name}
                        designation={item.designation}
                        review={item.review}
                    />
                </div>
        );
      })}
    </div>
  </div>
  )
}

export default eventscard