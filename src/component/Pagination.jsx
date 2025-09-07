import React from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

const Pagination = ({ onPageChange, blogs, currentPage, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);

  // Don't render pagination if only one page
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination">
      <ul className="flex justify-center gap-2 m-5">
        
        {/* Previous button */}
        <li>
          <button className="text-gray-600 mr-2 cursor-pointer"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <FaArrowLeft/>
          </button>
        </li>

        {/* Page number buttons */}
     <div className="flex flex-row gap-3">
         {pages.map((pageNumber) => (
          <li className=""
           key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`border border-gray-400 px-2 cursor-pointer rounded hover:bg-gray-300 active:bg-orange-500 ${pageNumber === currentPage ? "bg-orange-500 text-white border- hover:text-black": ""}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
     </div>

        {/* Next button */}
        <li>
          <button className="text-gray-600 ml-2 cursor-pointer"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <FaArrowRight/>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
