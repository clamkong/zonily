import React from 'react';
import {Input } from 'semantic-ui-react';

import playbooksData from '../../data/mock/playbooks';
import PlaybookCardsContainer from '../PlaybookCardsContainer/PlaybookCardsContainer';


export default class MarketplacePage extends React.Component {
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
                <PlaybookCardsContainer playbooks={this.state.playbooksData} />
            </div>
        )
    }
}

