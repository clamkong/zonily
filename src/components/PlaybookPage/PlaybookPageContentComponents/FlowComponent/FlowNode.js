import React from "react";
import "./FlowNode.css";

export default class FlowNode extends React.Component {
  render() {
    return (
      <div className="flow-node">
        {`${this.props.name}`}
        {this.props.num == this.props.maxLength - 1 ? "" : "--->"}
      </div>
    );
  }
}
