import React, { useState } from 'react';
import './DoctorList.css';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const DoctorList = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('adddoctor');
  };
  const handleMoreDetails = (doctor) => {
    navigate('doctordetails', { state: { doctor } });
  };

  const doctors = [
    { id: 1, image: 'https://via.placeholder.com/50', name: 'Dr. Andrio Maksim', gender: 'Male', position: 'Senior Doctor', speciality: 'Cardiologist', status: 'Full-time' },
    { id: 2, image: 'https://via.placeholder.com/50', name: 'Dr. Emily Clark', gender: 'Female', position: 'Junior Doctor', speciality: 'Neurologist', status: 'Part-time' },
    { id: 3, image: 'https://via.placeholder.com/50', name: 'Dr. John Doe', gender: 'Male', position: 'Consultant', speciality: 'Dermatologist', status: 'Full-time' },
    { id: 4, image: 'https://via.placeholder.com/50', name: 'Dr. Jane Smith', gender: 'Female', position: 'Surgeon', speciality: 'Orthopedic', status: 'Full-time' },
    { id: 5, image: 'https://via.placeholder.com/50', name: 'Dr. Lisa Ray', gender: 'Female', position: 'Senior Doctor', speciality: 'Pediatrician', status: 'Part-time' },
    { id: 6, image: 'https://via.placeholder.com/50', name: 'Dr. Michael Green', gender: 'Male', position: 'Consultant', speciality: 'Oncologist', status: 'Full-time' },
    { id: 7, image: 'https://via.placeholder.com/50', name: 'Dr. Sarah Brown', gender: 'Female', position: 'Junior Doctor', speciality: 'Ophthalmologist', status: 'Full-time' },
    { id: 8, image: 'https://via.placeholder.com/50', name: 'Dr. Peter Black', gender: 'Male', position: 'Surgeon', speciality: 'ENT Specialist', status: 'Full-time' },
    { id: 9, image: 'https://via.placeholder.com/50', name: 'Dr. Nancy White', gender: 'Female', position: 'Consultant', speciality: 'Psychiatrist', status: 'Part-time' },
    { id: 10, image: 'https://via.placeholder.com/50', name: 'Dr. David Lee', gender: 'Male', position: 'Senior Doctor', speciality: 'General Practitioner', status: 'Full-time' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sortGender, setSortGender] = useState('');
  const [sortStatus, setSortStatus] = useState('');
  const [sortSpeciality, setSortSpeciality] = useState('');

  const doctorsPerPage = 5;

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (sortGender ? doctor.gender === sortGender : true) &&
      (sortStatus ? doctor.status === sortStatus : true) &&
      (sortSpeciality ? doctor.speciality === sortSpeciality : true)
    );
  });

  const totalDoctors = filteredDoctors.length;
  const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

  const startIndex = (currentPage - 1) * doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, startIndex + doctorsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="doctor-dashboard">
      <div className="header1">
        <div className="search-container">
          <input type="text" placeholder="Search here..." />
          <button className="search-btn">🔍</button>
        </div>
        <button onClick={handleAdd} className="add-doctor-btn">+ Add Doctor</button>
      </div>

      <div className="sort-options">
        <select value={sortGender} onChange={(e) => setSortGender(e.target.value)}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <select value={sortSpeciality} onChange={(e) => setSortSpeciality(e.target.value)}>
          <option value="">All Specialities</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
          <option value="ENT Specialist">ENT Specialist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="General Practitioner">General Practitioner</option>
        </select>
      </div>

      <table className="doctor-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Speciality</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {currentDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td><img src={doctor.image} alt={doctor.name} width="50" /></td>
              <td>{doctor.name}</td>
              <td>{doctor.gender}</td>
              <td>{doctor.position}</td>
              <td>{doctor.speciality}</td>
              <td>{doctor.status}</td>
              <td>
                <button onClick={() => handleMoreDetails(doctor)} className="edit-btn">More details</button>
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
              <span className="font-medium">{Math.min(startIndex + doctorsPerPage, totalDoctors)}</span> of{' '}
              <span className="font-medium">{totalDoctors}</span> results
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

export default DoctorList;


// phụ chưa có pagin


// import React, { useState } from 'react';
// import './DoctorList.css';
// import { useNavigate } from 'react-router-dom';
// import Example from '../../Components/Pagination';




// const DoctorList = () => {
//   const [sortGender, setSortGender] = useState('');
//   const [sortStatus, setSortStatus] = useState('');
//   const [sortSpeciality, setSortSpeciality] = useState('');

//   const navigate = useNavigate();
//   const handleAdd = () => {
//     navigate('adddoctor');
//   };
//   const handleMoreDetails = (doctor) =>{
//     navigate('doctordetails', {state:{doctor}})
//   }

//   const doctors = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Andrio Maksim',
//       gender: 'Male',
//       position: 'Senior Doctor',
//       speciality: 'Cardiologist',
//       status: 'Full-time',
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Emily Clark',
//       gender: 'Female',
//       position: 'Junior Doctor',
//       speciality: 'Neurologist',
//       status: 'Part-time',
//     },
//     {
//       id: 3,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. John Doe',
//       gender: 'Male',
//       position: 'Consultant',
//       speciality: 'Dermatologist',
//       status: 'Full-time',
//     },
//     {
//       id: 4,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Jane Smith',
//       gender: 'Female',
//       position: 'Surgeon',
//       speciality: 'Orthopedic',
//       status: 'Full-time',
//     },
//     {
//       id: 5,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Lisa Ray',
//       gender: 'Female',
//       position: 'Senior Doctor',
//       speciality: 'Pediatrician',
//       status: 'Part-time',
//     },
//     {
//       id: 6,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Michael Green',
//       gender: 'Male',
//       position: 'Consultant',
//       speciality: 'Oncologist',
//       status: 'Full-time',
//     },
//     {
//       id: 7,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Sarah Brown',
//       gender: 'Female',
//       position: 'Junior Doctor',
//       speciality: 'Ophthalmologist',
//       status: 'Full-time',
//     },
//     {
//       id: 8,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Peter Black',
//       gender: 'Male',
//       position: 'Surgeon',
//       speciality: 'ENT Specialist',
//       status: 'Full-time',
//     },
//     {
//       id: 9,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. Nancy White',
//       gender: 'Female',
//       position: 'Consultant',
//       speciality: 'Psychiatrist',
//       status: 'Part-time',
//     },
//     {
//       id: 10,
//       image: 'https://via.placeholder.com/50',
//       name: 'Dr. David Lee',
//       gender: 'Male',
//       position: 'Senior Doctor',
//       speciality: 'General Practitioner',
//       status: 'Full-time',
//     },
//   ];

//   //filter the doctor
//   const filteredDoctors = doctors.filter((doctor) => {
//     return (
//       (sortGender ? doctor.gender === sortGender : true) &&
//       (sortStatus ? doctor.status === sortStatus : true) &&
//       (sortSpeciality ? doctor.speciality === sortSpeciality : true)
//     );
//   });

//   return (
    
//     <div className="doctor-dashboard">
//       <div className="header1">
//       <div className="search-container">
//           <input type="text" placeholder="Search here..." />
//           <button className="search-btn">🔍</button>
//       </div>
//         <button onClick={handleAdd} className="add-doctor-btn">+ Add Doctor</button>
//       </div>

//       <div className="sort-options">
//         <select value={sortGender} onChange={(e) => setSortGender(e.target.value)}>
//           <option value="">All Genders</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <select value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
//           <option value="">All Status</option>
//           <option value="Full-time">Full-time</option>
//           <option value="Part-time">Part-time</option>
//         </select>
//         <select value={sortSpeciality} onChange={(e) => setSortSpeciality(e.target.value)}>
//           <option value="">All Specialities</option>
//           <option value="Cardiologist">Cardiologist</option>
//           <option value="Neurologist">Neurologist</option>
//           <option value="Dermatologist">Dermatologist</option>
//           <option value="Orthopedic">Orthopedic</option>
//           <option value="Pediatrician">Pediatrician</option>
//           <option value="Oncologist">Oncologist</option>
//           <option value="Ophthalmologist">Ophthalmologist</option>
//           <option value="ENT Specialist">ENT Specialist</option>
//           <option value="Psychiatrist">Psychiatrist</option>
//           <option value="General Practitioner">General Practitioner</option>
//         </select>
//       </div>

//       <table className="doctor-table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Position</th>
//             <th>Speciality</th>
//             <th>Status</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDoctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td><img src={doctor.image} alt={doctor.name} width="50" /></td>
//               <td>{doctor.name}</td>
//               <td>{doctor.gender}</td>
//               <td>{doctor.position}</td>
//               <td>{doctor.speciality}</td>
//               <td>{doctor.status}</td>
//               <td>
//               <button onClick={() => handleMoreDetails(doctor)} className="edit-btn">More details</button>
//               <button className="delete-btn">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Example/>
//     </div>
//   );
// };

// export default DoctorList;
// bảng chính ở trên 

