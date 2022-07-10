
import React from 'react'
import Plot from 'react-plotly.js';

const myData = [
  { x: "oil", y: 500 },
  { x: "wheat", y: 400 },
  { x: "something", y: 300 },
];
function Chart() {
  return (
    <Plot 
				data={[
					{
						x: ['11/07/2020','11/25/2020','12/01/2020','12/15/2020','12/31/2020', '01/15/2021'],
						y: [200, 140, 312, 200, 400,500],
						type: 'scatter'
					}
				]}
				layout={ { width: 1000, height: 500, title: 'Number of Patients' } }
			/>
  )
}

export default Chart