import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import "./PieComponent.css";
/**
 * A Pie Type View
 */
class PieComponent extends React.Component {
  onSliceClicked(props) {
    console.log(props);
    console.log(`Slice ${props.payload.title} selected`);

    this.props.onContentSelected(props.payload.details, props.payload.title);
  }
  render() {
    const data = this.props.data;

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
          fill="white"
          x={x}
          y={y}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >{`${(percent * 100).toFixed(0)}% - ${data[index].title}`}</text>
      );
    };

    return (
      <div className="pie-component" style={{ height: 500 + "px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              nameKey="title"
              dataKey="value"
              label={renderCustomizedLabel}
              outerRadius="80%"
              onClick={this.onSliceClicked.bind(this)}
              animationDuration={700}
              animationBegin={200}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  stroke={"#14181E"}
                  fill={COLORS[index]}
                  strokeWidth={2}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default PieComponent;
