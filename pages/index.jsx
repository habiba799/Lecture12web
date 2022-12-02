import React from 'react'
import EventItem from '../components/EventItem'
import {getAllEvents} from "../DUMMY_DATA"

function index() {
  const events = getAllEvents();
  console.log(events);
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-start flex-col  p-5 gap-5'>
        
        { events.map((item) => {
          return <EventItem item={item} />
        }) }
        
        {/* <EventItem id="e1" title="title 1" subtitle="sub title 1" description="description 1" />

        <EventItem id="e2" title="title 2" subtitle="sub title 2" description="description 2" />

        <EventItem id="e3" title="title 3" subtitle="sub title 3" description="description 3" />
         */}
    </div>
  )
}

export default index