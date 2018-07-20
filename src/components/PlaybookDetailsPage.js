import React from 'react';

export default class PlaybookDetailsPage extends React.Component {
    render() {
        return (
            `this is the playbook details page for page this for ${this.props.match.params.pId}`
        );
    }
}