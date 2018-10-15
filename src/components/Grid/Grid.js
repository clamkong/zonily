import React from 'react';

export default class Grid extends React.Component {
  constructor(props){
    super(props)
  }

  gridClick(){
    this.props.handleGridClick(this.props.grid.details)
  }

  render() {
    return (
      <div className="grid" onClick={this.gridClick.bind(this)}>
        { this.props.grid.description }
      </div>
    )
  }
}
