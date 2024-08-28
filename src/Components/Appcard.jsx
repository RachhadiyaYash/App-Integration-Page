import { useEffect, useState } from "react";
import "./AppCard.css";
export default function AppCard({
  imageUrl,
  companyName,
  description,
  isActive,
}) {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    const storedActiveState = JSON.parse(
      localStorage.getItem(`card-active-${companyName}`)
    );
    if (storedActiveState !== null) {
      setActive(storedActiveState);
    }
  }, [companyName]);

  const handleToggle = () => {
    const newActiveState = !active;
    setActive(newActiveState);
    localStorage.setItem(
      `card-active-${companyName}`,
      JSON.stringify(newActiveState)
    );
  };

  return (
    <div
      className={`relative flex flex-col justfy-center border rounded-lg p-4 md:w-auto border-gray-300 transition-transform transform hover:scale-105`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#6D13FB] opacity-0 hover:opacity-40 transition-opacity"></div>
      <div className="flex justify-between items-center w-full mb-4 relative z-10">
        <div className="flex items-center">
          <img src={imageUrl} alt={companyName} className="w-12 h-12" />
        </div>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            id={`switch-${companyName}`}
            type="checkbox"
            className="peer sr-only"
            checked={active}
            onChange={handleToggle}
          />
          <div className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#6D13FB] peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
        </label>
      </div>
      <h3 className="text-lg font-bold text-left">{companyName}</h3>
      <p className="text-sm text-gray-600 pt-2">{description}</p>
    </div>
  );
}
