import { useGlobalContext } from '../context/Context';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const Overview = () => {
  const { doctors, patients, inventory } = useGlobalContext();

  // Prepare data for charts
  const doctorData = [
    { name: 'Available', value: doctors.filter(doc => doc.available).length },
    { name: 'Not Available', value: doctors.filter(doc => !doc.available).length },
  ];

  const patientStatusData = [
    { name: 'Emergency', value: patients.filter(patient => patient.status === 'Emergency').length },
    { name: 'Stable', value: patients.filter(patient => patient.status === 'Stable').length },
  ];

  const inventoryData = inventory.map(item => ({
    name: item.name,
    quantity: item.quantity,
  }));

  const trendData = [
    { date: '2024-01', doctors: doctors.length, patients: patients.length, inventory: inventory.reduce((sum, item) => sum + item.quantity, 0) },
    // Add more data as needed
  ];

  const COLORS = ['#FF9874', '#FFD7C4', '#7695FF'];

  return (
    <div className="mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-200 min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Doctors Statistics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Doctors Statistics</h3>
          <PieChart width={300} height={300} className="w-full">
            <Pie
              data={doctorData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {doctorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Patients Statistics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Patients Statistics</h3>
          <PieChart width={300} height={300} className="w-full">
            <Pie
              data={patientStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {patientStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Inventory Statistics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Inventory Statistics</h3>
          <PieChart width={300} height={300} className="w-full">
            <Pie
              data={inventoryData}
              dataKey="quantity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {inventoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Trends Over Time */}
        <div className="bg-white p-4 rounded-lg shadow-md col-span-1 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Trends Over Time</h3>
          <LineChart width={600} height={300} data={trendData} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="doctors" stroke="#FF9874" />
            <Line type="monotone" dataKey="patients" stroke="#FFD7C4" />
            <Line type="monotone" dataKey="inventory" stroke="#7695FF" />
          </LineChart>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Stats Summary</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <AiOutlineDollarCircle className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Doctors: {doctors.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineDollarCircle className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Patients: {patients.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineDollarCircle className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Inventory Items: {inventory.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
