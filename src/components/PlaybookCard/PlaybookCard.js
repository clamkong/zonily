import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./PlaybookCard.css";

const PlaybookCard = ({ name, id, image, description }) => {
  // const pid = id;
  // const onClick = function(){
  //   return function(){
  //     history.push(`/playbook/${pid}`);
  //   }
  // };

  return (
    <div className="playbook-card">
      <NavLink to={`/playbook/${id}`}>
        <div className="playbook-card-image">
          <img src={image} />
        </div>
        <div className="playbook-card-content">
          <h2>{name}</h2>
          <div className="playbook-card__description">
            {description ? description : `Coming Soon!`}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default withRouter(PlaybookCard);
