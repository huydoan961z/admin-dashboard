import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { useLocation } from 'react-router-dom';
import './PatientDetails.css'
function PatientDetails()
{
    const location = useLocation();
    const { patient } = location.state;
    return (
        <>
        <div className='whole-main'>
          <div class="profile-header">
              <div class="profile-info">
                <h3>Id:{patient.id}</h3>
                <h2>Patient: {patient.name}</h2>
              </div>
              <div class="divider"></div>
              <div class="profile-status">
                <p >Status:</p>
                <p>{patient.status}</p>
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
                  <div class="value">{patient.gender} </div>
                </div>
                <div class="info-row">
                  <div class="label">Email</div>
                  <div class="value">{patient.email}</div>
                </div>
                <div class="info-row">
                  <div class="label">Phone:</div>
                  <div class="value">{patient.phone}</div>
                </div>
                <div class="info-row">
                  <div class="label">Address:</div>
                  <div class="value">{patient.address}</div>
                </div>
                <div class="info-row">
                  <div class="label">Status</div>
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
    
              </div>
              
    
    
            </div>
            
    
          </div>
    
          </div>
    
          <div>
            
          </div>
        
        </>
      );
    };
export default PatientDetails;