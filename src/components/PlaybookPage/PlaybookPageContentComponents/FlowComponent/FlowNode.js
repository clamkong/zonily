import React from "react";
import "./FlowNode.css";

export default class FlowNode extends React.Component {
  onNodeClick() {
    this.props.onContentSelected(
      this.props.item.details,
      `${this.props.item.period} - ${this.props.item.title}`
    );
  }
  render() {
    return (
      <div className="flow-node">
        <div
          className="flow-node__content"
          onClick={this.onNodeClick.bind(this)}
        >
          <div className="flow-node__content--top">
            <div>{this.props.item.period}</div>
          </div>
          <div className="flow-node__content--bottom">
            <div className="flow-node__content--bottom--title">
              <strong>{`${this.props.item.title}`}</strong>
            </div>
            <div className="flow-node__content--bottom--quick-points">
              {this.props.item.quickPoints.map((quickPoint, index) => {
                return <p key={index}>{quickPoint}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="flow-node__edge">
          {this.props.num == this.props.maxLength - 1 ? "" : "---"}
        </div>
      </div>
    );
  }
}
