/* eslint-disable @typescript-eslint/no-unused-vars */
// components/common/UserModal.tsx
import React, { useState } from 'react';
import { UserData, UserModalProps } from '../../interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: 0, 
    name: '', 
    username: '', 
    email: '', 
    address: {
      street: '', 
      suite: '', 
      city: '', 
      zipcode: '', 
      geo: { lat: '', lng: '' }
    }, 
    phone: '', 
    website: '', 
    company: { 
      name: '', 
      catchPhrase: '', 
      bs: '' 
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);  // Ensure onSubmit is called here
    onClose();  // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="modal bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Add New User</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit} // Call the handleSubmit function on click
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
