import React from 'react';
import { Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const PlaybookCard = ({name, id}) => (
    <Card
        href={`/playbook/${id}`}
    >
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Description of Playbook {name}</Card.Description>
        </Card.Content>
    </Card>
)

export default PlaybookCard;
