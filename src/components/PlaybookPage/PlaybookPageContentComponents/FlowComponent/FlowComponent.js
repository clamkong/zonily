import React from "react";
import FlowNode from "./FlowNode";
import "./FlowComponent.css";

export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      { id: 0, name: "2005 - 1st year in US" },
      { id: 1, name: "2005 - Professional Life" },
      { id: 2, name: "2006 - Life in Kitchen" },
      { id: 3, name: "2006 - Silver Spoon" },
      { id: 4, name: "2007 - Osha Thai" },
      { id: 5, name: "2007 - Transition" },
      { id: 6, name: "2007 - Sweet Maple" },
      { id: 7, name: "2007 - Transition" },
      { id: 8, name: "2010 - First Resturant" },
      { id: 9, name: "2010 - Transition" },
      { id: 10, name: "2010 - Kitchen Story(2nd Restaurant)" },
      { id: 11, name: "2010 - Transition" },
      { id: 12, name: "2013 - Farmhouse" },
      { id: 13, name: "2013 - Transition" },
      { id: 14, name: "2017 - Daughter Thai" },
      { id: 15, name: "2017 - Transition" },
      { id: 16, name: "2017 - Farmhouse, Portland" },
      { id: 17, name: "2017 - Transition" },
      { id: 18, name: "2018 - Jack London Square" }
    ];
  }
  render() {
    return (
      <div className="flow-component">
        {this.data.map((item, index) => {
          return (
            <FlowNode
              name={item.name}
              maxLength={this.data.length}
              key={index}
              num={index}
            />
          );
        })}
      </div>
    );
  }
}
