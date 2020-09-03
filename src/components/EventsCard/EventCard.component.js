import React from "react";

const EventCard = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card w-100 ml-0 mb-3 shadow-lg">
          <img className="card-img-top" src={props.image} alt="mtseExam" />
          <div className="card-body">
            <div className="card-title text-center">
              <strong style={{fontSize:"24px"}}>{props.name}</strong>
            </div>

            <button type="button" className="btn btnOutColor m-2">
              <a className="card-link" href={props.learnMore}>
                Learn More
              </a>
            </button>

            <button type="button" className="btn btnColor">
              <a className="card-link" href={props.registerationLink}>
                Register
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
