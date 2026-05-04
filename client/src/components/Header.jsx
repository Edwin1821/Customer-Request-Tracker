import { IoMdAdd } from "react-icons/io";


const Header = ({ onCreate }) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Customer Request Tracker
        </h1>
        <p className="text-sm text-gray-500">
          Create, track and resolve customer service requests.
        </p>
      </div>

      <button
        onClick={onCreate}
        className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 cursor-pointer"
      >
        <IoMdAdd className="text-2xl hidden md:block"/>
         New Request
      </button>
    </div>
  );
};

export default Header;