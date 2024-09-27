import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditService.css'; // CSS riêng cho trang edit

function EditService() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state;

  // State để giữ thông tin của service đang chỉnh sửa
  const [editService, setEditService] = useState({ ...service });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditService({ ...editService, [name]: value });
  };

  const handleSave = () => {
    // Logic để lưu thông tin
    console.log('Service saved:', editService);
    navigate(`/service/servicedetail`, { state: { service: editService } }); // Trả lại trang chi tiết sau khi save
  };

  return (
    <div className="edit-service-container">
      <h1>Edit Service Information</h1>
      <div className="form-group">
        <label>Service Name:</label>
        <input
          type="text"
          name="serviceName"
          value={editService.serviceName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Service Type:</label>
        <input
          type="text"
          name="type"
          value={editService.type}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={editService.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Speciality:</label>
        <input
          type="text"
          name="speciality"
          value={editService.speciality}
          onChange={handleChange}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default EditService;
