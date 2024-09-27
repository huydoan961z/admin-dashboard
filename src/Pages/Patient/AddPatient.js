import React from 'react';
import './AddPatient.css';
import { Breadcrumb } from 'react-breadcrumbs-dynamic';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function AddPatient() {
  return (
    <form>
            {/* <Breadcrumb to="/doctor">Doctor</Breadcrumb> */}

      {/* Section 1: Doctor Information */}
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className=" first-text text-base font-semibold leading-7 text-gray-900">Patient Information</h1>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* ID */}
            <div className="sm:col-span-3">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">ID</label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  placeholder="Doctor ID"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Image */}
            <div className="sm:col-span-3">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            {/* First name and Last name */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Gender and Date of Birth */}
            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
              <div className="mt-2">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Address and Phone Number */}
            <div className="sm:col-span-3">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Doctor's address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Additional Information */}
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className=" first-text text-base font-semibold leading-7 text-gray-900">Additional Information</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            {/* Experience */}
            <div className="col-span-full">
              <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">Pre-existing Conditions</label>
              <div className="mt-2">
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter doctor's experience details"
                />
              </div>
            </div>

            {/* Awards */}
            <div className="col-span-full">
              <label htmlFor="awards" className="block text-sm font-medium leading-6 text-gray-900">Private Notes</label>
              <div className="mt-2">
                <textarea
                  id="awards"
                  name="awards"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="List any awards or recognitions"
                />
              </div>
            </div>

            {/* Status */}
            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Retired</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
