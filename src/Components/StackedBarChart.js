

import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class StackedBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Male Customers',
          data: [150, 130, 140, 120, 170, 160, 150, 180, 175, 160, 155, 145]
        },
        {
          name: 'Female Customers',
          data: [170, 160, 150, 140, 180, 170, 160, 190, 185, 170, 165, 155]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true // Stacks the bars
        },
        plotOptions: {
          bar: {
            horizontal: false, // Makes vertical bars
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        xaxis: {
          categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ], // Months in the year
        },
        yaxis: {
          title: {
            text: 'Number of Customers'
          }
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false // Disable data labels on the bars
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " customers";
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />


      </div>
    );
  }
}

export default StackedBarChart;
