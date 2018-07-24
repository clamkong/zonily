import React from 'react';
import {Card} from 'semantic-ui-react';

import PlaybookCard from '../PlaybookCard/PlaybookCard';

const PlaybookCardsContainer = ({playbooks}) => (
    <div className="cards-container">
        {
            playbooks.length === 0 ? (
                <p> No Playbooks </p>
            ) : (
                    <Card.Group itemsPerRow={4}>
                        {playbooks.map((playbook) => {
                            return <PlaybookCard key={playbook.id} name={playbook.name} id={playbook.id} />
                        })}
                    </Card.Group>
                )
        }
    </div>
)

export default PlaybookCardsContainer;