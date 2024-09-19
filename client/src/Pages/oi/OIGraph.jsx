
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const Line_Chart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Loading...</div>;
  }

  // Calculate min and max values for Y-axis
  const minYValue = Math.min(
    ...data.map((item) => Math.min(item.S_OI_Calls, item.S_OI_Puts))
  );
  const maxYValue = Math.max(
    ...data.map((item) => Math.max(item.S_OI_Calls, item.S_OI_Puts))
  );

  // Calculate padding as a percentage of the data range
  const range = maxYValue - minYValue;
  const padding = range * 0.1; // 10% padding


  const minValue = minYValue - padding;
  const maxValue = maxYValue + padding;


  const formatYAxis = (value) => {
        if (value >= 1e9) {
          return `${(value / 1e9).toFixed(1)}B`;
        } else if (value >= 1e6) {
          return `${(value / 1e6).toFixed(1)}M`;
        } else if (value >= 1e3) {
          return `${(value / 1e3).toFixed(1)}K`;
        }
        return value;
      };

  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="Date" 
          tickFormatter={(value) => new Date(value).toLocaleDateString()} 
          tick={{ fontSize: 12 }}
        />
        
        {/* YAxis for PCR (right side) */}
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 2]} // Adjust domain based on your data range
        />
        
        {/* YAxis for S_OI_Calls and S_OI_Puts (left side) */}
        <YAxis 
          yAxisId="left" 
          domain={[minValue, maxValue]} // Apply calculated min and max values
          tickFormatter={formatYAxis} // Apply custom formatter
          tick={{ fontSize: 12 }}
        />
        
        <Tooltip 
          labelFormatter={(value) => new Date(value).toLocaleDateString()} 
          formatter={(value) => new Intl.NumberFormat().format(value)} 
        />
        <Legend />

        {/* Reference line for PCR at 1 */}
        <ReferenceLine yAxisId="right" y={1} stroke="red" />

        {/* Line for PCR */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="PCR"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dot={false}
        />

        {/* Line for S_OI_Calls */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="S_OI_Calls"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
          dot={false}
        />

        {/* Line for S_OI_Puts */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="S_OI_Puts"
          stroke="#ff7300"
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Line_Chart;
