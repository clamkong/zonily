import React from "react";
import "./FlowNode.css";

export default class FlowNode extends React.Component {
  render() {
    return (
      <div className="flow-node">
        <div className="flow-node__content">{`${this.props.name}`}</div>
        <div className="flow-node__edge">
          {this.props.num == this.props.maxLength - 1 ? "" : "--->"}
        </div>
      </div>
    );
  }
}
