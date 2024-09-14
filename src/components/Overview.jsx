import { useGlobalContext } from '../context/Context';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import avatar from '../assets/avatar.jpg';

const Overview = () => {
  const { doctors, patients, inventory, accountDetails } = useGlobalContext();

  return (
    <div className="mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-200 min-h-screen p-6">

      <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>

      {/* Account Details Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Details</h3>
        <div className='flex space-x-6'>
        <img src={avatar} className='w-32 h-32 rounded-md' alt="" />
        <div className='mt-4'>
          <div className="flex items-center mb-2">
            <AiOutlineUser className="text-[#7695FF] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Name: {accountDetails.name}</p>
          </div>
          <div className="flex items-center mb-2">
            <AiOutlineMail className="text-[#7695FF] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Email: {accountDetails.email}</p>
          </div>
          <div className="flex items-center mb-2">
            <AiOutlinePhone className="text-[#7695FF] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Phone: {accountDetails.phone}</p>
          </div>
        </div>
        </div>
        
        
      </div>


      {/* Stats Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Stats Summary</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <AiOutlineUser className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Doctors: {doctors.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineUser className="text-[#FFD7C4] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Patients: {patients.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineUser className="text-[#7695FF] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Total Inventory Items: {inventory.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineUser className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Available Doctors: {doctors.filter(doc => doc.available).length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineUser className="text-[#FF9874] mr-2 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">Unavailable Doctors: {doctors.filter(doc => !doc.available).length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
