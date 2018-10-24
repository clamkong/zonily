import React from "react";
import "./FlowNode.css";

export default class FlowNode extends React.Component {
  onNodeClick() {
    this.props.onContentSelected(
      this.props.item.details,
      this.props.item.title
    );
  }
  render() {
    return (
      <div className="flow-node" onClick={this.onNodeClick.bind(this)}>
        <div className="flow-node__content">{`${this.props.item.title}`}</div>
        <div className="flow-node__edge">
          {this.props.num == this.props.maxLength - 1 ? "" : "--->"}
        </div>
      </div>
    );
  }
}
