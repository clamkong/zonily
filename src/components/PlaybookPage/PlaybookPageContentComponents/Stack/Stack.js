import React from 'react';

export default class Stack extends React.Component {
  constructor(props){
    super(props)
  }

  generateStackInfo(){
    return this.props.stack.stackInfo.map((stack, index) => {
      return <div key={index} className='stack-info'>{stack}</div>
    })
  }

  render(){
    return (
      <div className='stack'>
        <h3 className='stack-title'>{ this.props.stack.stackTitle }</h3>
        { this.generateStackInfo() }
      </div>
    )
  }
}
