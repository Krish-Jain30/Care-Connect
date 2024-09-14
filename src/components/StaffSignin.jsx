import React from 'react'

const StaffSignin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full">
        {/* Left Section: Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
          <img
            src="/careconnect_logo.png"
            alt="HSVP Logo"
            className="w-96 h-32 object-contain"
          />
          <h2 className="mt-6 text-3xl font-semibold text-center">
            CareConnect
          </h2>
          <p className="mt-4 text-lg text-center font-light">STAFF'S CORNER</p>
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login as Staff
          </h2>

          <form>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="captcha"
                className="block text-gray-700 text-sm font-medium"
              >
                Captcha
              </label>
              <div className="flex items-center mt-2">
                <img
                  src="/avoid-captcha.jpg"
                  alt="Captcha"
                  className="w-32 h-12 object-cover mr-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="captcha"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter Captcha here"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default StaffSignin