import React from "react";
import { Card } from "semantic-ui-react";
import './PlaybookCardsContainer.css';

import PlaybookCard from "../PlaybookCard/PlaybookCard";

const PlaybookCardsContainer = ({ playbooks }) => (
  <div className="cards-container">
    {playbooks.length === 0 ? (
      <p> No Playbooks </p>
    ) : (
      <div className="cards-group">
        {playbooks.map(playbook => {
          return (
            <PlaybookCard
              key={playbook.id}
              name={playbook.name}
              image={playbook.image}
              id={playbook.id}
            />
          );
        })}
      </div>
    )}
  </div>
);

export default PlaybookCardsContainer;
