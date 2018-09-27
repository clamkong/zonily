import React from "react";
import { withRouter } from "react-router-dom";
import "./PlaybookCard.css";

const PlaybookCard = ({ name, id, image, history }) => {
  const onClick = () => {
    history.push(`/playbook/${id}`);
  };

  return (
    <div className="playbook-card" onClick={onClick}>
      <div className="playbook-card-image">
        <img src={image} />
      </div>
      <div className="playbook-card-content">
        <h2>{name}</h2>
        <div className="playbook-card__description">
          Description of Playbook {name}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlaybookCard);
