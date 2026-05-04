import { useState } from "react";
import API from "../services/Api";
import { IoMdClose } from "react-icons/io";

const CreateRequestModal = ({ isOpen, onClose, refresh }) => {
  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    title: "",
    description: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
      e.preventDefault();
      await API.post("/", form);
      refresh();
      onClose();
    };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-105 rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-semibold text-lg">New customer request</h2>
            <p className="text-sm text-gray-500">Fill in the details below.</p>
          </div>

          <button onClick={onClose} className="cursor-pointer text-2xl hover:text-gray-700">
            <IoMdClose />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <input
              name="customer_name"
              placeholder="Customer Name"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 h-24"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800"
            >
              Create request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequestModal;
