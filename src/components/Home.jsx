
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo on the left */}
            <div className="flex items-center">
              <img src="/careconnect_logo.png" alt="CareConnect Logo" className="h-6 w-40" />
            </div>

            {/* Sign In Buttons on the right */}
            <div className="flex space-x-4">
            <Link to = '/About'><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About Us</button></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blue-600">Join the CareConnect Platform</h1>
          <p className="mt-4 text-lg text-gray-600">
            Sign up to connect, manage, and streamline your healthcare services efficiently.
          </p>
        </div>
      </header>

      {/* Signin Options */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Doctor Signin */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctor Signup</h2>
            <p className="text-gray-600 mb-6">Join as a doctor and manage your patients seamlessly.</p>
            <Link to = '/Doctor-Login'>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-500">
            Login as Doctor
            </button>
            </Link>
          </div>

          {/* Management Signin */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Management Signin</h2>
            <p className="text-gray-600 mb-6">Oversee and streamline your healthcare operations.</p>
            <Link to = "/Mangement-Login">
            <button className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-500">
              Login as Management
            </button>
            </Link>
          </div>

          {/* Staff Signin */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Staff Signin</h2>
            <p className="text-gray-600 mb-6">Get access to tools to manage daily operations effectively.</p>
            <Link to = '/Staff-Login'>
            <button className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-500">
            Login as Staff
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <img
                src="/heart-rate.png"
                alt="Feature 1"
                className="mx-auto mb-4 h-16"
              />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Patient Mangement</h3>
              <p className="text-gray-600">Easily manage patient records and appointments with our intuitive dashboard.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <img
                src="/hospital.png"
                alt="Feature 2"
                className="mx-auto mb-4 h-16"
              />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">Streamline operations, track performance, and make data-driven decisions.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <img
                src="/teamwork.png"
                alt="Feature 3"
                className="mx-auto mb-4 h-16"
              />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Staff Coordination</h3>
              <p className="text-gray-600">Improve communication and workflow for staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">&copy; 2024 CareConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;