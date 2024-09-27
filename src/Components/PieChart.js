import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 20, 100], // Percentages for each service based on price or another criteria
      options: {
        chart: {
          type: 'pie',
        },
        labels: ['General Checkup', 'Blood Test', 'X-Ray'], // Names of the services
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        tooltip: {
          y: {
            formatter: function(val) {
              return val + "%"; // Customize tooltip to show percentage
            }
          }
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="140%" // Set width to 60% of the parent container
        />
 

      </div>
    );
  }
}

export default PieChart;
