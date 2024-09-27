//bảng 3
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import './DoctorDetails.css'
import { FaStar } from 'react-icons/fa'; // Import star icon


const DoctorDetails = () => {
  const location = useLocation();
  const { doctor } = location.state;
  // Fake data for feedback statistics
  const feedbackStats = {
    totalReviews: 150,
    stars: {
      5: 100,
      4: 30,
      3: 10,
      2: 5,
      1: 5,
    },
    pros: [
      'Good communication',
      'Friendly staff',
      'Quick service',
    ],
    cons: [
      'Long waiting time',
      'Limited parking space',
    ],
  };
  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <FaStar key={i} color="#FFD700" /> // Màu vàng cho ngôi sao
    ));
  };

  return (
    <>
    <div className='whole-main'>
      <div class="profile-header">
          <div class="profile-info">
            <h3>Id:{doctor.id}</h3>
            <h2>Doctor: {doctor.name}</h2>
          </div>
          <div class="divider"></div>
          <div class="profile-status">
            <p >Status:</p>
            <p>{doctor.status}</p>
          </div>
      </div>

      <div className='profile-main'>
        <div className='basic-info'>
          <div className='basic-info-header'>
            <h1>Basic Information</h1>
          </div>
          <div class="basic-info-main">
            
            <div class="info-row">
              <div class="label">Gender: </div>
              <div class="value">{doctor.gender} </div>
            </div>
            <div class="info-row">
              <div class="label">Position</div>
              <div class="value">{doctor.position}</div>
            </div>
            <div class="info-row">
              <div class="label">Speciality:</div>
              <div class="value">{doctor.speciality}</div>
            </div>
            <div class="info-row">
              <div class="label">Experience:</div>
              <div class="value">not info</div>
            </div>
            <div class="info-row">
              <div class="label">Rating Consultant</div>
              <div class="value">not info</div>
            </div>
            
          </div>    
          <div className='feedback'>
            <div className='basic-info-header'>
              <h1>Introduce</h1>
            </div>
            <div>Not info</div>
          </div>
            
        </div>
        <div className='main-info'>
          <div className='major-info'>
              <div className='basic-info-header'>
                <h1>Feedback</h1>
              </div>
              <div className="feedback-stats">
                <h3>Star Ratings</h3>
                <ul>
                  {Object.keys(feedbackStats.stars).map(star => (
                    <li key={star}>
                      <div className='star-rating'>
                        {renderStars(parseInt(star))} {/* Render các icon ngôi sao */}
                        : {feedbackStats.stars[star]} reviews
                      </div>
                    </li>
                  ))}
                </ul>

                <h3>Pros</h3>
                <ul>
                  {feedbackStats.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>

                <h3>Cons</h3>
                <ul>
                  {feedbackStats.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorDetails
