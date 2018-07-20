import React from 'react';
import AuthorDetails from './AuthorDetails';
import ShoppingTile from './ShoppingTile';

export default class PlaybookDetailsPage extends React.Component {
    render() {
        return (
            <div className="playbook-details" style={{display: "flex"}}>
                <div className="playbook-details-content"> 
                    <div className="playbook-title-info">
                        <h1>Playbook Title</h1>
                        <h3>Playbook gist</h3>
                        <h3>Playbook rating </h3>
                        <h3># of people who bought playbook</h3>
                        <h2>Created by John Smith</h2>
                        <h4>Language: English</h4>
                    </div>
                    <div className="video-section">Playbook intro video</div>
                    <div className="what-you-learn">
                        <h2>What will I learn?</h2>
                        <p>Blah blah blah</p>
                    </div>
                    <div className="playbook-outline">
                        <h2>Playbook Outline</h2>
                        <ul>
                            <li>Chapter 1</li>
                            <li>Chapter 2</li>
                            <li>Chapter 3</li>
                            <li>Chapter 4</li>
                        </ul>
                    </div>
                    <AuthorDetails />
                    {`this is the playbook details page for page this for ${this.props.match.params.pId}`}
                </div>
                <ShoppingTile />
                
            </div>
        );
    }
}