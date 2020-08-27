/*
  This is our events details page
  This page is not finalised yet it can be changed according to design and I have added it here to show different pages
*/

import React from "react";
import EventCard from "../../components/EventsCard/EventCard.component";
import WebinarTable from "../../components/EventsCard/WebinarTable.component";
import { events } from "../../shared/event";
import { webinars } from "../../shared/webinar";

const Event = () => {
  console.log(events);
  console.log(webinars);

  return (
    <section style={{ height: "auto", marginTop: "80px" }}>
      <div className="container">
        <div className="row ">
          <div className="col text-center">
            <h1>Our Events</h1>
            <p className="lead">
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
        <div className="row gx-5">
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                learnMore={"#"}
                registerationLink={event.registeration}
              />
            );
          })}
        </div>

        <div className="row">
          <div className="col m-5">
            <h3 className="p-5">Our Webinars and Professional Talks</h3>
            <table className="table">
              <thead>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Event Name</th>
                <th scope="col">Platform</th>
                <th scope="col">Know More</th>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
