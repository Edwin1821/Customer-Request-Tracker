import { useEffect, useState } from "react";
import Header from "../components/Header";
import API from "../services/Api";
import RequestCard from "../components/RequestCard";
import FilterTabs from "../components/FilterTabs";
import CreateRequestModal from "../components/createRequestModal";
import ViewRequestModal from "../components/ViewrequestModal";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [viewData, setViewData] = useState(null);

  const handleView = async (id) => {
    try {
      const res = await API.get(`/${id}`);
      setViewData(res.data);
      setViewOpen(true);
    } catch (err) {
      console.error("Error fetching single request:", err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await API.get("/");
      setData(res.data.data || res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered =
    filter === "All" ? data : data.filter((item) => item.status === filter);

  const counts = {
    All: data.length,
    New: data.filter((item) => item.status === "New").length,
    "In Progress": data.filter((item) => item.status === "In Progress").length,
    Resolved: data.filter((item) => item.status === "Resolved").length,
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 my-10">
        {/* Header */}
        <Header onCreate={() => setOpen(true)} />

        <FilterTabs current={filter} setFilter={setFilter} counts={counts} />

        {/* Request list */}
        {filtered.map((item) => (
          <RequestCard
            key={item.id}
            item={item}
            refresh={fetchData}
            onView={(id) => {
              handleView(id);
            }}
          />
        ))}

        {/* Create Modal */}
        <CreateRequestModal
          isOpen={open}
          onClose={() => setOpen(false)}
          refresh={fetchData}
        />
      </div>
      {/* 👁 View Modal */}
      <ViewRequestModal
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
        data={viewData}
      />
    </>
  );
};

export default Dashboard;
