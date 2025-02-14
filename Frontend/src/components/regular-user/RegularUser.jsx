import React from 'react';

const RegularUser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Regular User Registration</h2>
        <form className="space-y-4">
          
          {/* Personal Information */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* Location Information */}
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
            <input type="text" id="address" name="address" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="pincode" className="block text-gray-700 font-medium">Pin Code</label>
            <input type="text" id="pincode" name="pincode" placeholder="Pin Code" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center text-gray-700">
            <input type="checkbox" name="terms" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm">I agree to the terms and conditions.</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegularUser;

