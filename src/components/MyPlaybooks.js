import React from 'react';
import PlaybookCard from './PlaybookCard';
import { Card, Input } from 'semantic-ui-react';
import myPlaybooksData from '../data/mock/myPlaybooks';


export default class MyPlaybooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myPlaybooksData
        }
    }
    render() {
        return (
            <div className="marketplace-page">
                <div className="search-bar">
                    <Input icon='search' placeholder="Search my Playbooks" />
                </div>

                <div className="cards-container">
                    {
                        this.state.myPlaybooksData.length === 0 ? (
                            <p> No Playbooks </p>
                        ) : (
                                <Card.Group itemsPerRow={4}>
                                    {myPlaybooksData.map((playbook) => {
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

