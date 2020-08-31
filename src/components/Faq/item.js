import React from "react";

const Item = ({ question, answer }) => (
  <div className="row  border-bottom pt-5">
    <div className="col-12 col-lg-5">
      <p>
        <span>
          <i id="icon" class="fa far fa-question-circle"></i>
        </span>{" "}
        {question}
      </p>
    </div>
    <div className="col-12 col-lg-7 ">
      <p>{answer}</p>
    </div>
  </div>
);

export default Item;
