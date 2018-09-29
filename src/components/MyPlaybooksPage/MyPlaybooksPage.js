import React from 'react';
import {Input } from 'semantic-ui-react';

import PlaybookCardsContainer from '../PlaybookCardsContainer/PlaybookCardsContainer';
import myPlaybooksData from '../../data/mock/myPlaybooks';
import "./MyPlaybooksPage.css";

export default class MyPlaybooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myPlaybooksData
        }
    }

    render() {
        return (
            <div className="my-playbooks-page">
                <div className="search-bar">
                    <Input icon='search' placeholder="Search my Playbooks" />
                </div>

                <PlaybookCardsContainer playbooks={this.state.myPlaybooksData} />
            </div>
        )
    }
}

