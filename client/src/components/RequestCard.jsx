import API from "../services/Api";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const RequestCard = ({ item, refresh, onView }) => {
  const updateStatus = async (status) => {
    await API.put(`/${item.id}`, { status });
    refresh();
  };

  const deleteRequest = async () => {
    await API.delete(`/${item.id}`);
    refresh();
  };

  return (
    <div className="bg-white border rounded-xl p-5 flex justify-between items-center shadow-sm mb-3 border-gray-300">
      <div>
          <h3 className="font-semibold text-gray-900">{item.title}</h3>

          <p className="text-sm text-gray-500">
            {item.customer_name} • {item.email}
          </p>

           <p className="text-xs text-gray-400 mt-2">
              {new Date(item.created_at).toLocaleString()}
           </p>
      </div>

      <div className="flex items-center gap-3">
        <p className={`border border-gray-100 bg-gray-100 m-2 px-3 py-[2px] rounded-xl font-semibold text-black text-[12px] ${  
          item.status === "In Progress"
          ? "bg-gray-900 text-white hover:bg-gray-700"
          : "bg-gray-100 text-black"
        }`}
        >
          {item.status}
        </p>

        <select
          value={item.status}
          onChange={(e) => updateStatus(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 border-gray-300 "
        >
          <option className="border border-gray-300">New</option>
          <option className="border border-gray-300">In Progress</option>
          <option className="border border-gray-300">Resolved</option>
        </select>

        <button
          onClick={() => onView(item.id)}
          className="border rounded-md px-2 py-1 cursor-pointer hover:bg-gray-100 border-gray-300"
        >
          <AiOutlineEye />
        </button>

        <button
          onClick={deleteRequest}
          className="border rounded-md px-2 py-1 hover:bg-red-100 cursor-pointer hover:text-red-600 border-gray-300"
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
