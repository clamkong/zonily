import React from "react";
import FlowNode from "./FlowNode";
import "./FlowComponent.css";

export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flow-component">
        {this.props.data.map((item, index) => {
          return (
            <FlowNode
              onContentSelected={this.props.onContentSelected}
              item={item}
              maxLength={this.props.data.length}
              key={index}
              num={index}
            />
          );
        })}
      </div>
    );
  }
}
