import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceList.css';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';



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

  const [currentPage, setCurrentPage]= useState(1);
  const [sortStatus, setSortStatus] = useState("");
  const [sortType, setSortType] = useState("");

  // Filter services based on the selected status and type
  const filterService = services.filter((service) => {
    return (
      (sortStatus ? service.status === sortStatus : true) &&
      (sortType ? service.type === sortType : true)
    );
  });
  const servicePerPages=5;
  const totalServices=filterService.length;
  const totalPages=Math.ceil(totalServices/servicePerPages);
  const startIndex= (currentPage-1)*servicePerPages;
  const currentServices= filterService.slice(startIndex, startIndex+servicePerPages);
  const handlePageChange= (newPage) =>{
    if(newPage>=1 && newPage<= totalPages){
      setCurrentPage(newPage)
    }
  }


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
          {currentServices.map((service) => (
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
      {/* Pagination Component */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{Math.min(startIndex + servicePerPages, totalServices)}</span> of{' '}
              <span className="font-medium">{totalServices}</span> results
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

export default ServiceList;
