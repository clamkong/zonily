import React from 'react';
import PlaybookCard from './PlaybookCard';
import {Card, Input} from 'semantic-ui-react'


export default class MarketPlacePage extends React.Component {
    getPlaybooks() {
        return [
            {
                id:0,
                name: "Playbook0"
            },
            {
                id: 1,
                name: "Playbook1"
            },
            {
                id: 2,
                name: "Playbook2"
            },
            {
                id: 3,
                name: "Playbook3"
            },
            {
                id: 4,
                name: "Playbook4"
            },
        ]
    }

    render() {
        return (
            <div className="marketplace-page">
                <div className="search-bar"> 
                    <Input icon='search' placeholder="Search for Playbooks"/>
                </div>

                <div className="cards-container">
                    {
                        this.getPlaybooks().length === 0 ? (
                            <p> No Playbooks </p>
                        ) : (
                                <Card.Group itemsPerRow={4}>
                                    {this.getPlaybooks().map((playbook) => {
                                        return <PlaybookCard key={playbook.id} name={playbook.name} />
                                    })}
                                </Card.Group>
                            )
                    }
                </div>
            </div>
        )
    }
}

