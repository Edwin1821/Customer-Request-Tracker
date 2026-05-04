import { useState } from "react";
import API from "../services/Api";
import { useNavigate } from "react-router-dom";

const CreateRequest = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", form);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Create Request</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="customer_name"
          placeholder="Customer Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRequest;
