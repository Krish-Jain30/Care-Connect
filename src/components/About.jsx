import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Introduction */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          About Our Platform
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our platform bridges the gap between the hospital's staff, doctors,
          and administration. With seamless inventory management and patient
          record tracking, we aim to enhance hospital operations and patient
          care.
        </p>
      </section>

      {/* Key Features */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-blue-600">Staff and Doctor Collaboration</h3>
          <p className="mt-4 text-gray-600">
            Our platform connects hospital staff and doctors, providing a
            unified system for real-time communication and collaboration.
            Whether it’s sharing patient records or managing tasks, the team
            is always in sync.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-blue-600">Inventory Management</h3>
          <p className="mt-4 text-gray-600">
            Efficient inventory tracking ensures that medical supplies and
            equipment are well managed. Our system provides real-time updates
            on stock levels, ensuring you never run out of critical resources.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-blue-600">Patient Record Management</h3>
          <p className="mt-4 text-gray-600">
            Doctors can easily take and update patient records, track
            treatments, and keep comprehensive medical histories, all in one
            secure location. Our goal is to streamline patient care with
            modern record-keeping.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-blue-600">Real-Time Updates</h3>
          <p className="mt-4 text-gray-600">
            Get real-time notifications on task assignments, stock updates,
            and patient statuses, ensuring that nothing is missed during
            hospital operations.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Since launching, our platform has revolutionized hospital management
          by improving operational efficiency, reducing paperwork, and
          enhancing patient care. We help hospitals move towards a paperless,
          more effective workflow.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Have any questions or need support? Contact us at{' '}
          <a href="mailto:support@hospitalplatform.com" className="text-blue-500">
            support@hospitalplatform.com
          </a>{' '}
          or give us a call at +1 (555) 123-4567.
        </p>
      </section>
    </div>
  </div>
  )
}

export default About