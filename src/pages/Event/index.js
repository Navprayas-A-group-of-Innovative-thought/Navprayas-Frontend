/*
  This is our events details page
  This page is not finalised yet it can be changed according to design and I have added it here to show different pages
*/

import React from 'react'
import EventCard from '../../components/EventsCard/EventCard.component'
import WebinarTable from '../../components/EventsCard/WebinarTable.component'
import { events } from '../../shared/event'
import { webinars } from '../../shared/webinar'
import './Event.css'

const Event = () => {
  return (
    <>
      <div className='container text-center' style={{ marginTop: '69px' }}>
        <div className='row'>
          <div className='col-12  '>
            <h1 className='display-1'>Our Events</h1>
            <p className='lead'>
              We think together in better way for spreading the light of
              education, matching the present scenario and other
              technical/non-technical developments in Manpur. We as a team leave
              no stone unturned in honouring them who set a milestone in
              dignifying our society through their dormant achievements. We,
              group of positive thinkers, feel that a lot needs to be done, can
              be done & should be done to bring it at par with rest of society.
              Every year, it adds new members with hidden dedications pouring
              into various events to make it a grand success. Since the
              inception of Navprayas, following events have been organized under
              its banner.
            </p>
          </div>
        </div>
        <div className='row'>
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                learnMore={'#'}
                registerationLink={event.registeration}
              />
            )
          })}
        </div>

        <div className='row row-content'>
          <div className='col'>
            <div className='display-3 m-2'>
              Our Webinars and Professional Talks
            </div>
            <table className='table table-striped'>
              <thead>
                <th scope='col'>#</th>
                <th scope='col'>Date</th>
                <th scope='col'>Event Name</th>
                <th scope='col'>Platform</th>
                <th scope='col'>Know More</th>
              </thead>

              <tbody>
                {webinars.map((webinar) => {
                  return (
                    <WebinarTable
                      key={webinar.id}
                      sr={webinar.id}
                      date={webinar.date}
                      name={webinar.name}
                      platform={webinar.platform}
                      knowMore={webinar.knowMore}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
