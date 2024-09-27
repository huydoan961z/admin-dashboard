import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { useLocation, useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để chuyển trang
import './ServiceDetail.css'
function ServiceDetails()
{
    const location = useLocation();
  const { service } = location.state;
  const navigate= useNavigate();
  const handleEdit = () => {
    navigate(`/service/editservice`, { state: { service } }); // Điều hướng đến trang edit với dữ liệu service
  };
    return (
        <>
        <div className='whole-main'>
          <div class="profile-header">
              <div class="profile-info">
                <h3>Id:{service.id}</h3>
                <h2>service: {service.serviceName}</h2>
              </div>
              <div class="divider"></div>
              <div class="profile-status">
                <p >Status:</p>
                <p>{service.status}</p>
              </div>
              <button className="edit-button" onClick={handleEdit}>Edit</button> {/* Nút Edit */}

          </div>
    
          <div className='profile-main'>
            <div className='basic-info'>
              <div className='basic-info-header'>
                <h1>Basic Information</h1>
              </div>
              <div class="basic-info-main">
                
                <div class="info-row">
                  <div class="label">Service: </div>
                  <div class="value">{service.type} </div>
                </div>
                <div class="info-row">
                  <div class="label">Price</div>
                  <div class="value">{service.price}</div>
                </div>
                <div class="info-row">
                  <div class="label">Speciality:</div>
                  <div class="value">{service.speciality}</div>
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
    
              </div>
              
    
    
            </div>
            
    
          </div>
    
          </div>
    
          <div>
            
          </div>
        
        </>
      );
    };
export default ServiceDetails