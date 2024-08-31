import { useState } from "react";

export default function Categorybuttons({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("All Apps");

  const categories = [
    "All Apps",
    "Mails","Publicity",
    "Communication",
   
    "Finance",
    "File Management",
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap lg:gap-x-4 md:gap-x-4  mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-8  py-2 m-1 rounded ${
            activeCategory === category
              ? "bg-[#6A14FC] text-white"
              : "bg-[#EEE8F4] text-black hover:bg-[#6A14FC] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
