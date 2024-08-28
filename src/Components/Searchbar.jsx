import { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-3   md:flex-row md:justify-between md:items-center mt-4 ">
      <div>
        <p className="text-4xl font-bold pb-1">Integrations</p>
        <p className="text-lg">Connect all your tools for best results.</p>
      </div>

      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search apps..."
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
    </div>
  );
}
