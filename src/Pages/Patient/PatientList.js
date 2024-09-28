
import React, {useState} from 'react';
import './PatientList.css'
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';



const PatientList = () => {
  
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
  const[currentPage, setCurrentPage]=useState(1);
  const [sortGender, setSortGender]= useState('')
  const [sortStatus, setSortStatus]= useState('')
  const filterPatients = patients.filter((patient) => {
    return(
      (sortGender ? patient.gender === sortGender : true) &&
      (sortStatus ? patient.status === sortStatus : true)
    );
  });
  
  const patientPerPage=5;
  const totalPatients=filterPatients.length;
  const totalPages=Math.ceil(totalPatients/patientPerPage);
  const startIndex= (currentPage-1)*patientPerPage;
  const currentPatients= filterPatients.slice(startIndex, startIndex+patientPerPage);
  const handlePageChange= (newPage) =>{
    if(newPage>=1 && newPage<= totalPages){
      setCurrentPage(newPage)
    }
  }
  const navigate= useNavigate();
  const handleAdd =() =>{
    navigate('addpatient')
  }
  const handleMoreDetails = (patient) =>{
    navigate('patientdetails', {state:{patient}})
  }

  
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
          {currentPatients.map((patient) => (
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
      {/* Pagination Component */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{Math.min(startIndex + patientPerPage, totalPatients)}</span> of{' '}
              <span className="font-medium">{totalPatients}</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                    currentPage === index + 1 ? 'bg-indigo-600 text-white' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
