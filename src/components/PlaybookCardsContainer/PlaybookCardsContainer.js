import React from "react";
import './PlaybookCardsContainer.css';

import PlaybookCard from "../PlaybookCard/PlaybookCard";

const PlaybookCardsContainer = ({ playbooks }) => (
  <div className="cards-container">
    {playbooks.length === 0 ? (
      <p> No Playbooks </p>
    ) : (
      <div className="cards-group">
        {playbooks.map((playbook, index) => {
          console.log(playbook);
          return (
            <PlaybookCard
              key={index}
              name={playbook.name}
              image={playbook.image}
              id={playbook.id}
              description={playbook.description}
            />
          );
        })}
      </div>
    )}
  </div>
);

export default PlaybookCardsContainer;
