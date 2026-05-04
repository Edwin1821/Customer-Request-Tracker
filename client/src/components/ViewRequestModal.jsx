import React from 'react'
import { IoMdClose } from "react-icons/io";

const ViewRequestModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white w-105 rounded-xl p-6 shadow-lg relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 border rounded-md px-2 py-1 cursor-pointer"
        >
          <IoMdClose />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-1">
          {data.title}
        </h2>

        {/* User */}
        <p className="text-sm text-gray-500 mb-3">
          From {data.customer_name} ({data.email})
        </p>

        {/* Status */}
        <span className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-3">
          {data.status}
        </span>

        {/* Description */}
        <p className="text-sm mb-3">
          {data.description}
        </p>

        {/* Date */}
        <p className="text-xs text-gray-400">
          Created {new Date(data.created_at).toLocaleString()}
        </p>

      </div>
    </div>
  );
};

export default ViewRequestModal;