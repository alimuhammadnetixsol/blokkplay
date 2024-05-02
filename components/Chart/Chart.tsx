import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
const COLORS = ["#16516B", "#25DBA8", "#EE953B", "#F32971"];

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 25 },
  { name: 'C', value: 30 },
  { name: 'D', value: 35 }
];
const getColor: any = (index: any) => COLORS[index % COLORS.length];

export default function Chart() {
  return (
    <div className="App">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getColor(index)}
              style={{
                filter: `drop-shadow(0px 0px 3px ${getColor(index)})`
              }}
              stroke="0"
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
