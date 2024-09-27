import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceList.css';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';


const ServiceList = () => {

  const services = [
    {
      id: 1,
      serviceName: 'General Checkup',
      type: 'Medical',
      price: '$50',
      status: 'Available',
    },
    {
      id: 2,
      serviceName: 'Blood Test',
      type: 'Diagnostic',
      price: '$20',
      status: 'Unavailable',
    },
    {
      id: 3,
      serviceName: 'X-Ray',
      type: 'Diagnostic',
      price: '$100',
      status: 'Available',
    },
    // Add more services as needed
  ];

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('addservice');
  };

  const handleDelete = () => {
    // Functionality to delete a service
  };

   const handleMoreDetails = (service) =>{
    navigate('servicedetail', {state:{service}})
  }

  const [sortStatus, setSortStatus] = useState("");
  const [sortType, setSortType] = useState("");

  // Filter services based on the selected status and type
  const filterService = services.filter((service) => {
    return (
      (sortStatus ? service.status === sortStatus : true) &&
      (sortType ? service.type === sortType : true)
    );
  });

  return (
    <div className="service-dashboard">
      <div className="header">
        <div className="search-container">
          <input type="text" placeholder="Search here..." />
          <button className="search-btn">🔍</button>
        </div>
        <button onClick={handleAdd} className="add-service-btn">+ Add Service</button>
      </div>
      <div className='sort-options'>
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="">All Types</option>
            <option value="Medical">Medical</option>
            <option value="Diagnostic">Diagnostic</option>
          </select>
          <select value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
      <table className="service-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filterService.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.serviceName}</td>
              <td>{service.type}</td>
              <td>{service.price}</td>
              <td>{service.status}</td>
              <td>
              <button onClick={() => handleMoreDetails(service)} className="edit-btn">More details</button>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
