

import React, { useState } from 'react';
import './DoctorList.css';
import { useNavigate } from 'react-router-dom';




const DoctorList = () => {
  const [sortGender, setSortGender] = useState('');
  const [sortStatus, setSortStatus] = useState('');
  const [sortSpeciality, setSortSpeciality] = useState('');

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('adddoctor');
  };
  const handleMoreDetails = (doctor) =>{
    navigate('doctordetails', {state:{doctor}})
  }

  const doctors = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Andrio Maksim',
      gender: 'Male',
      position: 'Senior Doctor',
      speciality: 'Cardiologist',
      status: 'Full-time',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Emily Clark',
      gender: 'Female',
      position: 'Junior Doctor',
      speciality: 'Neurologist',
      status: 'Part-time',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. John Doe',
      gender: 'Male',
      position: 'Consultant',
      speciality: 'Dermatologist',
      status: 'Full-time',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Jane Smith',
      gender: 'Female',
      position: 'Surgeon',
      speciality: 'Orthopedic',
      status: 'Full-time',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Lisa Ray',
      gender: 'Female',
      position: 'Senior Doctor',
      speciality: 'Pediatrician',
      status: 'Part-time',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Michael Green',
      gender: 'Male',
      position: 'Consultant',
      speciality: 'Oncologist',
      status: 'Full-time',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Sarah Brown',
      gender: 'Female',
      position: 'Junior Doctor',
      speciality: 'Ophthalmologist',
      status: 'Full-time',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Peter Black',
      gender: 'Male',
      position: 'Surgeon',
      speciality: 'ENT Specialist',
      status: 'Full-time',
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. Nancy White',
      gender: 'Female',
      position: 'Consultant',
      speciality: 'Psychiatrist',
      status: 'Part-time',
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. David Lee',
      gender: 'Male',
      position: 'Senior Doctor',
      speciality: 'General Practitioner',
      status: 'Full-time',
    },
  ];

  //filter the doctor
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (sortGender ? doctor.gender === sortGender : true) &&
      (sortStatus ? doctor.status === sortStatus : true) &&
      (sortSpeciality ? doctor.speciality === sortSpeciality : true)
    );
  });

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
          {filteredDoctors.map((doctor) => (
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
    </div>
  );
};

export default DoctorList;




// import React, { useState } from 'react';
// import './DoctorList.css';
// import { useNavigate } from 'react-router-dom';
// import { Breadcrumb } from 'react-breadcrumbs-dynamic';


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
//     { id: 11, name: 'Dr. Daniel Thompson', gender: 'Male', speciality: 'Ophthalmologist' },
//     { id: 12, name: 'Dr. Olivia Garcia', gender: 'Female', speciality: 'Anesthesiologist' },
//   ];

//   //filter the doctor
//   const filteredDoctors = doctors.filter((doctor) => {
//     return (
//       (sortGender ? doctor.gender === sortGender : true) &&
//       (sortStatus ? doctor.status === sortStatus : true) &&
//       (sortSpeciality ? doctor.speciality === sortSpeciality : true)
//     );
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const doctorsPerPage = 5;

//   // Get current doctors
//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

//   // Handle page change
//   const totalDoctors = doctors.length;
//   const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="doctor-dashboard">
//       <div className="header1">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search here..."
//             // value={searchTerm}
//             // onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-btn">🔍</button>
//         </div>
//         <button onClick={handleAdd} className="add-doctor-btn">
//           + Add Doctor
//         </button>
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
//           {currentDoctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td><img src={doctor.image} alt={doctor.name} width="50" /></td>
//               <td>{doctor.name}</td>
//               <td>{doctor.gender}</td>
//               <td>{doctor.position}</td>
//               <td>{doctor.speciality}</td>
//               <td>{doctor.status}</td>
//               <td>
//                 <button onClick={() => handleMoreDetails(doctor)} className="edit-btn">
//                   More details
//                 </button>
//                 <button className="delete-btn">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePreviousPage}
//           className={`px-4 py-2 rounded-lg ${
//             currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
//           }`}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         <button
//           onClick={handleNextPage}
//           className={`px-4 py-2 rounded-lg ${
//             currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
//           }`}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       <div className="text-center mt-4">
//         <p>Page {currentPage} of {totalPages}</p>
//       </div>
//     </div>
//   );
// };

// export default DoctorList;
