import { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete, AiOutlineMessage } from 'react-icons/ai';

const initialDoctorsData = [
  { id: 1, name: 'Dr. Smith', available: true, time: '09:00 - 17:00', designation: 'Doctor' },
  { id: 2, name: 'Dr. Johnson', available: false, time: '11:00 - 19:00', designation: 'Doctor' },
  { id: 3, name: 'Ms. Davis', available: true, time: '08:00 - 16:00', designation: 'Staff' },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(() => {
    const storedDoctors = localStorage.getItem('doctors');
    return storedDoctors ? JSON.parse(storedDoctors) : initialDoctorsData;
  });
  const [search, setSearch] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [message, setMessage] = useState('');
  const [newDoctor, setNewDoctor] = useState({ name: '', available: true, time: '', designation: 'Doctor' });

  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  // Handle send message
  const handleSendMessage = () => {
    if (selectedDoctor && message.trim()) {
      alert(`Message sent to ${selectedDoctor.name}: ${message}`);
      setMessage('');
    }
  };

  // Handle add new doctor
  const handleAddDoctor = () => {
    if (newDoctor.name.trim() && newDoctor.time.trim()) {
      const newDoctorData = {
        id: doctors.length ? Math.max(...doctors.map(doc => doc.id)) + 1 : 1,
        ...newDoctor,
      };
      setDoctors(prevDoctors => [...prevDoctors, newDoctorData]);
      setNewDoctor({ name: '', available: true, time: '', designation: 'Doctor' });
    }
  };

  // Handle edit doctor
  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setNewDoctor({ name: doctor.name, available: doctor.available, time: doctor.time, designation: doctor.designation });
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (selectedDoctor && newDoctor.name.trim() && newDoctor.time.trim()) {
      setDoctors(prevDoctors =>
        prevDoctors.map((doctor) =>
          doctor.id === selectedDoctor.id
            ? { ...doctor, ...newDoctor }
            : doctor
        )
      );
      setSelectedDoctor(null);
      setNewDoctor({ name: '', available: true, time: '', designation: 'Doctor' });
    }
  };

  // Handle delete doctor
  const handleDeleteDoctor = (id) => {
    setDoctors(prevDoctors => prevDoctors.filter(doc => doc.id !== id));
  };

  // Handle doctor selection on double-click
  const handleDoubleClick = (doctor) => {
    setSelectedDoctor(doctor);
    setNewDoctor({ name: doctor.name, available: doctor.available, time: doctor.time, designation: doctor.designation });
  };

  // Toggle availability status
  const handleAvailabilityToggle = () => {
    setNewDoctor(prevNewDoctor => ({ ...prevNewDoctor, available: !prevNewDoctor.available }));
  };

  // Stats calculations
  const totalDoctors = doctors.filter(doc => doc.designation === 'Doctor').length;
  const totalStaff = doctors.filter(doc => doc.designation === 'Staff').length;
  const availableDoctors = doctors.filter(doc => doc.available && doc.designation === 'Doctor').length;
  const unavailableDoctors = totalDoctors - availableDoctors;

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl  bg-indigo-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Doctors Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Add/Edit Doctor */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Add/Edit Doctor or Staff</h3>
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Doctor's Name"
              value={newDoctor.name}
              onChange={(e) => setNewDoctor(prevNewDoctor => ({ ...prevNewDoctor, name: e.target.value }))}
            />
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Available Time"
              value={newDoctor.time}
              onChange={(e) => setNewDoctor(prevNewDoctor => ({ ...prevNewDoctor, time: e.target.value }))}
            />
            <div className="flex items-center mb-2">
              <label className="mr-2 text-gray-800">Available:</label>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#7695FF] rounded"
                checked={newDoctor.available}
                onChange={handleAvailabilityToggle}
              />
            </div>
            <select
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              value={newDoctor.designation}
              onChange={(e) => setNewDoctor(prevNewDoctor => ({ ...prevNewDoctor, designation: e.target.value }))}
            >
              <option value="Doctor">Doctor</option>
              <option value="Staff">Staff</option>
            </select>
            <button
              onClick={selectedDoctor ? handleSaveEdit : handleAddDoctor}
              className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
            >
              {selectedDoctor ? <AiOutlineSave /> : 'Add Doctor'}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Message</h3>
            {selectedDoctor ? (
              <>
                <div className="p-4 bg-indigo-200 rounded-lg mb-4 flex items-center">
                  <AiOutlineMessage className=" mr-2" />
                  <textarea
                    className="border border-[#9DBDFF] p-2 rounded-lg w-full bg-white text-sm"
                    rows="4"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
                >
                  Send Message
                </button>
              </>
            ) : (
              <p className="text-gray-600">Select a doctor or staff to send a message.</p>
            )}
          </div>

          {/* Stats Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h3>
            <div className="bg-indigo-200 p-4 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold">Total Doctors: <span className="font-semibold">{totalDoctors}</span></p>
              <p className="text-gray-800 font-semibold">Total Staff: <span className="font-semibold">{totalStaff}</span></p>
              <p className="text-green-600 font-semibold">Available Doctors: <span className="font-semibold">{availableDoctors}</span></p>
              <p className="text-red-600 font-semibold">Unavailable Doctors: <span className="font-semibold">{unavailableDoctors}</span></p>
            </div>
          </div>
        </div>

        {/* Right Section: Doctors List */}
        <div className="bg-white rounded-lg shadow-md overflow-auto">
          <h3 className="text-xl px-4 pt-2 font-semibold mb-4 text-gray-800">Doctors & Staff List</h3>
          <div className="px-4 mb-4 flex items-center rounded-lg shadow-sm">
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg w-full bg-white text-sm"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#7695FF] text-white">
                <th className="border p-2">Name</th>
                <th className="border p-2">Available</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  onDoubleClick={() => handleDoubleClick(doctor)}
                  className="hover:bg-gray-200 cursor-pointer"
                >
                  <td className="border p-2">{doctor.name}</td>
                  <td className="border p-2">{doctor.available ? 'Available' : 'Not Available'}</td>
                  <td className="border p-2">{doctor.time}</td>
                  <td className="border p-2">{doctor.designation}</td>
                  <td className="border p-2 flex space-x-2">
                    <button
                      onClick={() => handleEditDoctor(doctor)}
                      className="bg-[#FFD7C4] text-[#FF9874] p-1 rounded-lg shadow-md hover:bg-[#FF9874] hover:text-white transition-transform"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteDoctor(doctor.id)}
                      className="bg-[#FF9874] text-white p-1 rounded-lg shadow-md hover:bg-[#FF6F6F] transition-transform"
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
