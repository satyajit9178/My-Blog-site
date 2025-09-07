import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="px-4 mb-8 flex flex-wrap items-center gap-6 border-b-2 border-gray-300 py-5 text-gray-900 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        aria-current={!activeCategory ? "true" : undefined}
        className={`pb-2 border-b-2 transition-colors duration-200 ${
          !activeCategory
            ? "text-orange-500 border-orange-500"
            : "text-gray-700 border-transparent hover:text-orange-500 hover:border-orange-300"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          aria-current={activeCategory === category ? "true" : undefined}
          className={`pb-2 border-b-2 transition-colors duration-200 ${
            activeCategory === category
              ? "text-orange-500 border-orange-500"
              : "text-gray-700 border-transparent hover:text-orange-500 hover:border-orange-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
