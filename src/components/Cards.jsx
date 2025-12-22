import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-2 mb-3 sm:mt-4 sm:my-3 p-2 sm:p-3 lg:p-4">
        <div className="card w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto bg-base-100 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] active:scale-[0.99] dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800 rounded-lg sm:rounded-xl overflow-hidden">

          {/* Image Section - Responsive */}
          <figure className="relative overflow-hidden w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px]">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </a>
          </figure>

          {/* Card Body - Responsive */}
          <div className="card-body p-3 sm:p-4 md:p-5 lg:p-6">
            {/* Title with Category Badge */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h2 className="card-title text-base sm:text-lg md:text-xl font-bold line-clamp-1">
                {item.name}
              </h2>
              <div className="badge badge-secondary text-xs sm:text-sm md:text-base py-2 px-3 sm:px-4">
                {item.category}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] mb-3 sm:mb-4">
              {item.tittle}
            </p>

            {/* Price and Button Section */}
            <div className="card-actions flex flex-col xs:flex-row justify-between items-stretch xs:items-center gap-3 mt-2 sm:mt-3">
              {/* Price Display - Responsive */}
              <div className="flex items-center justify-center xs:justify-start">
                <div className={`text-lg sm:text-xl md:text-2xl font-bold ${item.currency === "Free" ? "text-green-600 dark:text-green-400" : "text-pink-600 dark:text-pink-400"}`}>
                  {item.currency === "Free" ? "Free" : `${item.currency}${item.price}`}
                </div>
              </div>

              {/* Buy Now Button - Responsive */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center cursor-pointer px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border-[2px] border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white dark:hover:text-white transition-all duration-200 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Buy Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// Add these CSS styles at the end of your main CSS file or in a style tag
// If using Tailwind, make sure you have these classes or add custom ones:
/*
  Responsive breakpoints used:
  - xs: min-width: 475px (custom, add to tailwind.config.js if needed)
  - sm: min-width: 640px
  - md: min-width: 768px
  - lg: min-width: 1024px
  - xl: min-width: 1280px
  - 2xl: min-width: 1536px
*/

// For line-clamp if not using Tailwind plugin:
const customStyles = `
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default Cards;