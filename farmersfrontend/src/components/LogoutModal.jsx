import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css'
const LogoutModal = ({ show,  handleConfirm }) =>  {
    if (!show) {
      return null;
    }
    
    const handleClose = () => {
        window.location.replace("/profile")
      };


  
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" >
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative bg-white w-96 rounded shadow-lg">
            <div className="p-8">
              <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
              <p className="mb-4">Are you sure you want to logout?</p>
              <div className="flex justify-center">
                <button onClick={handleConfirm} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
                  Confirm
                </button>
                <button onClick={handleClose} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default LogoutModal
