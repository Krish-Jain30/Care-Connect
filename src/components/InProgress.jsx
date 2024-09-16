import { Link } from "react-router-dom";

const InProgress = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page In Progress...</h1>
        <p className="text-gray-600 mb-8">We're working hard to bring you this feature. Please check back later!</p>

        {/* Animated loader using Tailwind */}
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin mx-auto"></div>
        <Link to="/">
        <button className="px-6 py-2 mt-10 bg-blue-500 text-white rounded-3xl">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default InProgress;
