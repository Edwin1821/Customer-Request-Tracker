const FilterTabs = ({ current, setFilter, counts }) => {
  const tabs = ["All", "New", "In Progress", "Resolved"];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-3 py-1.5 rounded-md text-sm border cursor-pointer ${
            current === tab
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {tab} {counts[tab] || 0}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;