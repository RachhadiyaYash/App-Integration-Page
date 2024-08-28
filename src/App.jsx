import { useState, useEffect } from "react";
import AppCard from "./Components/Appcard";
import Categorybuttons from "./Components/Categorybuttons"; // Ensure correct case and relative path
import Searchbar from "./Components/Searchbar";
import { Carddata } from "./Carddata";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Apps");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedCardId, setHighlightedCardId] = useState(null);

  useEffect(() => {
    const storedCardId = localStorage.getItem("highlightedCardId");
    if (storedCardId) {
      setHighlightedCardId(Number(storedCardId));
    }
  }, []);

  useEffect(() => {
    if (highlightedCardId !== null) {
      localStorage.setItem("highlightedCardId", highlightedCardId);
    }
  }, [highlightedCardId]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCards = Carddata.filter(
    (card) =>
      (selectedCategory === "All Apps" ||
        card.appCategory === selectedCategory) &&
      card.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (id) => {
    setHighlightedCardId(id);
  };

  return (
    <div className="container mx-auto px-4  mt-2 mb-4">
      <Searchbar onSearch={handleSearch} />
      <Categorybuttons onCategoryChange={handleCategoryChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`cursor-pointer border-gray-300 `}
          >
            <AppCard
              imageUrl={card.imageUrl}
              companyName={card.companyName}
              description={card.description}
              isActive={highlightedCardId === card.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
