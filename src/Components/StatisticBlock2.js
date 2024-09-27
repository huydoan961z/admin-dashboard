import React from 'react';
import CountUp from 'react-countup'; // Import CountUp for animated numbers
import './StatisticBlock.css';

function StatisticBlock2({ title, number, percentage, isIncrease }) 
    {
    return(
        
        <div className='stat-item'>
            <div className='stat-title'>{title}</div>
            <div className='stat-value'>
            <CountUp end={number} duration={3} separator=',' prefix='VND'/>
            </div>
            <div className={`stat-percentage ${isIncrease ? 'increase' : 'decrease'}`}>
                {isIncrease ? '+' : ''}{percentage}%
            </div>

        </div>

        
    )
}
export default StatisticBlock2;
