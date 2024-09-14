import { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete } from 'react-icons/ai';
import Dashboard from './Dashboard';

const initialPatientsData = [
  { id: 1, name: 'John Doe', number: '1234567890', status: 'Stable', doctor: 'Dr. Smith' },
  { id: 2, name: 'Jane Smith', number: '0987654321', status: 'Emergency', doctor: 'Dr. Johnson' },
];

const Patients = () => {
  const [patients, setPatients] = useState(() => {
    const storedPatients = localStorage.getItem('patients');
    return storedPatients ? JSON.parse(storedPatients) : initialPatientsData;
  });
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({ name: '', number: '', status: 'Stable', doctor: '' });

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  // Handle add patient
  const handleAddPatient = () => {
    if (newPatient.name.trim() && newPatient.number.trim() && newPatient.doctor.trim()) {
      const newPatientData = {
        id: patients.length ? Math.max(...patients.map(pat => pat.id)) + 1 : 1,
        ...newPatient,
      };
      setPatients(prevPatients => [...prevPatients, newPatientData]);
      setNewPatient({ name: '', number: '', status: 'Stable', doctor: '' });
    }
  };

  // Handle edit patient
  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
    setNewPatient({ name: patient.name, number: patient.number, status: patient.status, doctor: patient.doctor });
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (selectedPatient && newPatient.name.trim() && newPatient.number.trim() && newPatient.doctor.trim()) {
      setPatients(prevPatients =>
        prevPatients.map((patient) =>
          patient.id === selectedPatient.id
            ? { ...patient, ...newPatient }
            : patient
        )
      );
      setSelectedPatient(null);
      setNewPatient({ name: '', number: '', status: 'Stable', doctor: '' });
    }
  };

  // Handle delete patient
  const handleDeletePatient = (id) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
  };

  // Stats calculations
  const totalPatients = patients.length;
  const emergencyPatients = patients.filter(patient => patient.status === 'Emergency').length;
  const stablePatients = totalPatients - emergencyPatients;

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Dashboard/>
    <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-200 min-h-screen max-sm:ml-0">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Patients Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Add/Edit Patient */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Add/Edit Patient</h3>
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Patient's Name"
              value={newPatient.name}
              onChange={(e) => setNewPatient(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Patient's Number"
              value={newPatient.number}
              onChange={(e) => setNewPatient(prev => ({ ...prev, number: e.target.value }))}
            />
            <select
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              value={newPatient.status}
              onChange={(e) => setNewPatient(prev => ({ ...prev, status: e.target.value }))}
            >
              <option value="Stable">Stable</option>
              <option value="Emergency">Emergency</option>
            </select>
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Doctor's Name"
              value={newPatient.doctor}
              onChange={(e) => setNewPatient(prev => ({ ...prev, doctor: e.target.value }))}
            />
            <button
              onClick={selectedPatient ? handleSaveEdit : handleAddPatient}
              className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
            >
              {selectedPatient ? <AiOutlineSave /> : 'Add Patient'}
            </button>
          </div>

          {/* Stats Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h3>
            <div className="bg-indigo-200 p-4 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold">Total Patients: <span className="font-semibold">{totalPatients}</span></p>
              <p className="text-red-600 font-semibold">Emergency Patients: <span className="font-semibold">{emergencyPatients}</span></p>
              <p className="text-green-600 font-semibold">Stable Patients: <span className="font-semibold">{stablePatients}</span></p>
            </div>
          </div>
        </div>

        {/* Right Section: Patients List */}
        <div className="bg-white rounded-lg shadow-md overflow-auto">
          <h3 className="text-xl font-semibold px-4 pt-4 mb-4 text-gray-800">Patients List</h3>
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
                <th className="border p-2">Number(+91)</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Doctor</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover:bg-gray-200 cursor-pointer"
                >
                  <td className="border p-2">{patient.name}</td>
                  <td className="border p-2">{patient.number}</td>
                  <td className={`border p-2 ${patient.status === 'Emergency' ? 'text-red-500' : ''}`}>{patient.status}</td>
                  <td className="border p-2">{patient.doctor}</td>
                  <td className="border p-2 flex space-x-2">
                    <button
                      onClick={() => handleEditPatient(patient)}
                      className="bg-[#FFD7C4] text-[#FF9874] p-1 rounded-lg shadow-md hover:bg-[#FF9874] hover:text-white transition-transform"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleDeletePatient(patient.id)}
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
  </div>
  );
};

export default Patients;
