import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  LabelList
} from "recharts";

import "./PieComponent.css";
/**
 * A Pie Type View
 */
class PieComponent extends React.Component {
  onSliceClicked(props) {
    console.log(props);
    console.log(`Slice ${props.payload.name} selected`)
    this.props.onSliceClicked(props.payload.id);
  }
  render() {
    const data = [
      { id: 0, name: "Marketing", value: 0.025 },
      { id: 1, name: "Miscellaneous", value: 0.04 },
      { id: 2, name: "Rent", value: 0.055 },
      { id: 3, name: "Food", value: 0.24 },
      { id: 4, name: "Labor", value: 0.55 },
      { id: 5, name: "Profit", value: 0.09 }
    ];
    const COLORS = [
      "#0E9D58",
      "#AB46BC",
      "#F4B400",
      "#DB4337",
      "#4285F4",
      "#00ACC1"
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }) => {
      const radius = 130 + innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      const cos = Math.cos(-RADIAN * midAngle);
      const textAnchor = cos >= 0 ? "start" : "end";
      return (
        <text
          x={x}
          y={y}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >{`${(percent * 100).toFixed(0)}% - ${data[index].name}`}</text>
      );
    };

    return (
      <div className="pie-component" style={{ height: 500 + "px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              label={renderCustomizedLabel}
              outerRadius="80%"
              onClick={this.onSliceClicked}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default PieComponent;
