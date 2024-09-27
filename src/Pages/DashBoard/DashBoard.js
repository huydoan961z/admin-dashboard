
import React from 'react';
import StackedBarChart from '../../Components/StackedBarChart'; 
import PieChart from '../../Components/PieChart'; 
import StatisticBlock from '../../Components/StatisticBlock'; 
import './DashBoard.css';
import StatisticBlock2 from '../../Components/StatisticBlock2';

function DashBoard() {
  return (
    <>
      <h1 className='title'>Dashboard Statistics System</h1>

      {/* New Statistic Blocks */}
      <div className="statistics-container">
        <StatisticBlock2 title="Revenue" number={405091} percentage={4.75} isIncrease={true} />
        <StatisticBlock2 title="Overdue invoices" number={12787} percentage={54.02} isIncrease={false} />
        <StatisticBlock2 title="Outstanding invoices" number={245988} percentage={-1.39} isIncrease={false} />
        <StatisticBlock2 title="Expenses" number={30156} percentage={10.18} isIncrease={true} />
      </div>

      {/* Statistic Blocks */}
      <div className="statistics-container">
        <StatisticBlock title="Patients" number={21324} />
        <StatisticBlock title="Doctor" number={211324} />
        <StatisticBlock title="Revenue" number={652234} />
        <StatisticBlock title="Reservation" number={21324} />
        <StatisticBlock title="Appointment" number={211324} />
      </div>

      {/* Charts */}
      <div className="chart-container">
        <div className="stack-bar">
          <StackedBarChart />
        </div>
        <div className="pie-chart">
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
