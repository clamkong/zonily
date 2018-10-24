import React from 'react';
import { fetchStackDetails } from '../../../../data/Farmhouse/ajax';
import Stack from './Stack'

export default class StackContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      stackData: null
    }
  }

  componentDidMount() {
    fetchStackDetails(this.props.id, this.receiveDataFetch.bind(this));
  }

  receiveDataFetch(payload) {
    const stackData = payload.data.stacks;
    this.setState({ data: payload, stackData: stackData })
  }

  stackContainerConstructor(){
    if (this.state.data === null){
      return <div>No stack data provided</div>
    } else {
      return this.stackConstructor(this.state.stackData)
    }
  }

  stackConstructor(stackData){
    return stackData.map((stack, index) => {
      return <Stack key={index} stack={stack}/>
    })
  }

  render() {
    return (
      <div className="stack-container">
        { this.stackContainerConstructor() }
      </div>
    )
  }
}
