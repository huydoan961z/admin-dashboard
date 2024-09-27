
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { BreadcrumbsProvider, Breadcrumbs, Breadcrumb } from 'react-breadcrumbs-dynamic';import React from 'react';
import LayoutDefault from './Layout/LayoutDefault';
import DashBoard from './Pages/DashBoard/DashBoard';
import DoctorDetails from './Pages/Doctor/DoctorDetails';
import AddDoctor from './Pages/Doctor/AddDoctor';
import DoctorList from './Pages/Doctor/DoctorList';
import PatientList from './Pages/Patient/PatientList';
import AddPatient from './Pages/Patient/AddPatient';
import PatientDetails from './Pages/Patient/PatientDetails.js';
import ServiceList from './Pages/Service/ServiceList';
import AddService from './Pages/Service/AddService';
import ServiceDetails from './Pages/Service/ServiceDetails';
import Error404 from './Pages/Error404/index.js';
import EditService from './Pages/Service/EditService.js';
function Doctor() {
  return <Outlet />;
}

function Patient() {
  return <Outlet />;
}

function Service() {
  return <Outlet />;
}

function App() {
  return (
    
    <BreadcrumbsProvider>
    <Router>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<DashBoard />} />
          <Route path='doctor' element={<Doctor />}>
            <Route index element={<DoctorList />} />
            <Route path='adddoctor' element={<AddDoctor />} />
            <Route path='doctordetails' element={<DoctorDetails />} />
          </Route>
          <Route path='patient' element={<Patient />}>
            <Route index element={<PatientList />} />
            <Route path='addpatient' element={<AddPatient />} />
            <Route path='patientdetails' element={<PatientDetails />} />
          </Route>
          <Route path='service' element={<Service />}>
            <Route index element={<ServiceList />} />
            <Route path='addservice' element={<AddService />} />1
            <Route path='servicedetail' element={<ServiceDetails />} />1

            <Route path='editservice' element={<EditService />} />
          </Route>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    
    </Router></BreadcrumbsProvider>
  );
}

export default App;

