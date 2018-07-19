import React from 'react';
import { Card } from 'semantic-ui-react'

const PlaybookCard = ({name}) => (
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Description of Playbook {name}</Card.Description>
        </Card.Content>
    </Card>
)

export default PlaybookCard;
