import React from 'react';
import LineCharts from '../components/LineCharts';

const Chart = () => {
  const data1 = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  const data2 = [
    { name: '가렌', uv: 1000, pv: 5400, amt: 2400 },
    { name: '야스오', uv: 1000, pv: 11398, amt: 2210 },
    { name: '애니', uv: 6000, pv: 9800, amt: 2290 },
    { name: '요네', uv: 4780, pv: 6908, amt: 2000 },
    { name: '마이', uv: 2890, pv: 2800, amt: 2181 },
    { name: '다리우스', uv: 90, pv: 1800, amt: 2500 },
    { name: '세트', uv: 490, pv: 7300, amt: 2100 },
  ];

  return (
    <>
      <h1>Charts</h1>

      <LineCharts data={data1} />
      <LineCharts data={data2} />
    </>
  );
};

export default Chart;
