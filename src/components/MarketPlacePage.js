import React from 'react';
import PlaybookCard from './PlaybookCard';
import { Card, Input } from 'semantic-ui-react';
import playbooksData from '../data/mock/playbooks';


export default class MarketPlacePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playbooksData
        }
    }
    render() {
        return (
            <div className="marketplace-page">
                <div className="search-bar">
                    <Input icon='search' placeholder="Search for Playbooks" />
                </div>

                <div className="cards-container">
                    {
                        this.state.playbooksData.length === 0 ? (
                            <p> No Playbooks </p>
                        ) : (
                                <Card.Group itemsPerRow={4}>
                                    {playbooksData.map((playbook) => {
                                        return <PlaybookCard key={playbook.id} name={playbook.name} id={playbook.id} />
                                    })}
                                </Card.Group>
                            )
                    }
                </div>
            </div>
        )
    }
}

