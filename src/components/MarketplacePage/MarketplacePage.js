import React from 'react';
import {Input } from 'semantic-ui-react';

import playbooksData from '../../data/mock/allPlaybooks';
import PlaybookCardsContainer from '../PlaybookCardsContainer/PlaybookCardsContainer';


export default class MarketplacePage extends React.Component {
    constructor(props){
        super(props);
        console.log("playbook data from constructor", playbooksData);
    }
    render() {
        console.log("from render",playbooksData);
        return (
            <div className="marketplace-page">
                <div className="search-bar">
                    <Input icon='search' placeholder="Search for Playbooks" />
                </div>
                <PlaybookCardsContainer playbooks={playbooksData} />
            </div>
        )
    }
}

