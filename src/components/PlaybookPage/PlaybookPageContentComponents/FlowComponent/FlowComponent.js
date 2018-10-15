import React from "react";
import FlowNode from "./FlowNode";
import "./FlowComponent.css";

export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 0,
        name: "node1"
      },
      {
        id: 1,
        name: "node2"
      },
      {
        id: 2,
        name: "node3"
      },
      {
        id: 3,
        name: "node4"
      }
    ];
  }
  render() {
    return (
      <div className="flow-component">
        {this.data.map((item, index) => {
          return <FlowNode name={item.name} maxLength={this.data.length} key={index} num={index} />;
        })}
      </div>
    );
  }
}
