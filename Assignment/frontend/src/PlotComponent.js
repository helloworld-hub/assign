
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PlotComponent = ({ aggregatedData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (aggregatedData && aggregatedData.hourlyData) { // Add this conditional check
      const ctx = chartRef.current.getContext('2d');

      // Prepare data for rendering
      const labels = [];
      const count0Data = [];
      const count1Data = [];

      aggregatedData.hourlyData.forEach(hourly => {
        labels.push(hourly._id);
        count0Data.push(hourly.count0);
        count1Data.push(hourly.count1);
      });

      // Create the chart
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Machine Status 0',
              data: count0Data,
              backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
              label: 'Machine Status 1',
              data: count1Data,
              backgroundColor: 'rgba(54, 162, 235, 0.5)'
            }
          ]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Hour'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Count'
              }
            }
          }
        }
      });
    }
  }, [aggregatedData]);

  return <canvas ref={chartRef} />;
};

export default PlotComponent;