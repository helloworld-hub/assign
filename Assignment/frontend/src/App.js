
import React, { useState, useEffect } from 'react';
import PlotComponent from './PlotComponent';

function App() {
  const [aggregatedData, setAggregatedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startTime = '2024-01-21T00:00:00Z';
        const endTime = '2024-01-21T23:59:59Z';
        const response = await fetch(`/api/data/aggregate?startTime=${startTime}&endTime=${endTime}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAggregatedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <PlotComponent aggregatedData={aggregatedData} />
    </div>
  );
}

export default App;