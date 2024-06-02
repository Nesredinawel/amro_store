import React, { useEffect, useState } from 'react';

const InvitationForm = ({ show, acceptance, }) => {
  const [requestProduct, setRequestProduct] = useState({
    email: acceptance.email,
    username: acceptance.username,
    farmerimage: acceptance.farmerimage,
    farmername: acceptance.farmername,
    productname:acceptance.productname,
    productimage: acceptance.productimage,
    price: acceptance.price,
    id: acceptance.id,
    emailrq: acceptance.emailrq,
    phonenumber:''
  });

  useEffect(() => {
   
      
    
  }, []);

  const handleClose = () => {
    window.location.replace('/orderedproduct');
  };

  const handleAcceptanceRequest = async () => {
    console.log('Sending request:', requestProduct);

    try {
      const response = await fetch('http://localhost:4000/acceptance', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestProduct),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        alert('Sent successfully');
      } else {
        alert('Failed');
      }

      window.location.replace('/orderedproduct');
    } catch (error) {
      console.error('Error during fetch:', error);
      alert(`Acceptance already exists`);
    }
  };

  if (!show) {
    return null;
  }





const handleInputClick = (e) => {
  // Prevent the default behavior of the click event on the input field
  e.preventDefault();
};

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-96 rounded shadow-lg">
          <div className="p-8">
             
              <div >
                <p className="mb-4">Send an Acceptance to {acceptance.username}</p>
              </div>
          
            <div className="mb-3">
              <h4 className="bold-18 pb-2">Phone Number:</h4>
              <input
                 type="number"
                 min="0" 
                name="phonenumber"
                onFocus={handleInputClick}
                value={requestProduct.phonenumber}
                onChange={(e) => setRequestProduct({ ...requestProduct, phonenumber: e.target.value })}
                placeholder={acceptance.username}
                className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleAcceptanceRequest}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleClose}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationForm;
