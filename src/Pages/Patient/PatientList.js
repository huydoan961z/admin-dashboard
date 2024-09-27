
import React, {useState} from 'react';
import './PatientList.css'
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';


const PatientList = () => {
  const [sortGender, setSortGender]= useState('')
  const [sortStatus, setSortStatus]= useState('')
  
  const navigate= useNavigate();
  const handleAdd =() =>{
    navigate('addpatient')
  }
  const handleMoreDetails = (patient) =>{
    navigate('patientdetails', {state:{patient}})
  }
  const patients = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50',
      name: 'John Doe',
      gender: 'Male',
      email: 'johndoe@gmail.com',
      phone: '+1234567890',
      address: '123 Main St, City',
      status: 'Admitted',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50',
      name: 'Emily Clark',
      gender: 'Female',
      email: 'emilyclark@gmail.com',
      phone: '+0987654321',
      address: '456 Maple St, City',
      status: 'Discharged',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50',
      name: 'Sarah Brown',
      gender: 'Female',
      email: 'sarahbrown@gmail.com',
      phone: '+1122334455',
      address: '789 Oak St, City',
      status: 'Under Treatment',
    },
    // Thêm dữ liệu bệnh nhân khác nếu cần
  ];

  const filterPatients = patients.filter((patient) => {
    return(
      (sortGender ? patient.gender === sortGender : true) &&
      (sortStatus ? patient.status === sortStatus : true)
    );
  });
  return (
    <div className="patient-dashboard">
      <div className="header">
        <div className="search-container">
            <input type="text" placeholder="Search here..." />
            <button className="search-btn">🔍</button>
        </div>
        <button onClick={handleAdd} className="add-patient-btn">+ Add Patient</button>
      </div>
      <div className='sort-options'>
        <select value={sortGender} onChange={(e) => setSortGender(e.target.value)}>
          <option value="">All genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
          <option value="">Status</option>
          <option value="Admitted">Admitted</option>
          <option value="Discharged">Discharged</option>
          <option value="Under Treatment">Under Treatment</option>
        </select>
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filterPatients.map((patient) => (
            <tr key={patient.id}>
              <td><img src={patient.image} alt={patient.name} width="50" /></td>
              <td>{patient.name}</td>
              <td>{patient.gender}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.address}</td>
              <td>{patient.status}</td>
              <td>
              <button onClick={() => handleMoreDetails(patient)} className="edit-btn">More details</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
