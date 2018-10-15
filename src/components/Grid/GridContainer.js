import React from 'react';
import { fetchGridDetails } from '../ajax'
import Grid from './Grid'

export default class GridContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      gridData: null,
      showDetails: false,
      gridDetails: null
    }
  }

  componentDidMount() {
    fetchGridDetails(this.props.id, this.receiveDataFetch.bind(this));
  }

  receiveDataFetch(payload) {
    const gridData = payload.data.boxes;
    this.setState({ data: payload, gridData: gridData })
  }

  handleGridClick(details){
    this.setState({ showDetails: true, gridDetails: details })
  }

  gridContainerConstructor(){
    if (this.state.data === null){
      return <div>No grid data provided</div>
    } else {
      return this.boxConstructor(this.state.gridData)
    }
  }

  boxConstructor(gridData){
    return gridData.map(grid => {
      return <Grid grid={grid}
                   handleGridClick={this.handleGridClick.bind(this)} />
    })
  }

  render() {
    return (
      <div className="grid-container">
        { this.gridContainerConstructor() }
        { this.state.showDetails ? <div className='grid-details'>{this.state.gridDetails}</div> : null}
      </div>
    )
  }
}
