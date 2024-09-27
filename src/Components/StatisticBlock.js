import React from 'react';
import CountUp from 'react-countup'; // Import CountUp for animated numbers
import './StatisticBlock.css';

const StatisticBlock = ({ title, number }) => {
  return (
    <>
      <div className="statistic-block">
        <h3>{title}</h3>
        <p>
          <CountUp end={number} duration={3} separator="," /> {/* Number counts up with animation */}
        </p>
      </div>
     
    </>
  );
};

export default StatisticBlock;
