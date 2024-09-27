import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddService.css';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { PhotoIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

export default function AddService() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="first-text text-base font-semibold leading-7 text-gray-900">
            Service Information
          </h1>
          
          {/* Service Name */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="service-name" className="block text-sm font-medium leading-6 text-gray-900">
                Service Name
              </label>
              <div className="mt-2">
                <input
                  id="service-name"
                  name="service-name"
                  type="text"
                  placeholder="Service name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Image */}
            <div className="sm:col-span-3">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Service Image</label>
              <div className="mt-2 flex items-center gap-x-3">
                <DocumentTextIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload Image
                </button>
              </div>
            </div>

            {/* Category */}
            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Consultation</option>
                  <option>Surgery</option>
                  <option>Diagnostics</option>
                  <option>Therapy</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            {/* Price */}
            <div className="sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Price (in VND)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Describe the service"
                />
              </div>
            </div>

            {/* Status */}
            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            
            
          </div>
        </div>

        {/* Additional Submit Section */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}


// const AddService = ({ onSaveService }) => {
//   const [serviceName, setServiceName] = useState('');
//   const [type, setType] = useState('');
//   const [price, setPrice] = useState('');
//   const [status, setStatus] = useState('');

//   const navigate = useNavigate();

//   const handleSave = () => {
//     const newService = {
//       id: Date.now(), // Generates a unique id
//       serviceName,
//       type,
//       price,
//       status,
//     };
//     onSaveService(newService);
//     navigate('/services'); // Redirect back to service list
//   };

//   return (
//     <div className="add-service-container">
//       <h2>Add New Service</h2>
//       <form className="add-service-form">
//         <div className="form-group">
//           <label>Service Name</label>
//           <input
//             type="text"
//             value={serviceName}
//             onChange={(e) => setServiceName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Type</label>
//           <select value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="">Select Type</option>
//             <option value="Medical">Medical</option>
//             <option value="Diagnostic">Diagnostic</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             type="text"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Status</label>
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="">Select Status</option>
//             <option value="Available">Available</option>
//             <option value="Unavailable">Unavailable</option>
//           </select>
//         </div>
//         <button type="button" onClick={handleSave} className="save-service-btn">
//           Save Service
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddService;
