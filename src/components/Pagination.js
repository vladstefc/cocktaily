import React, { useEffect, useState } from "react";

import "./Pagination.css";

export default function Pagination(props) {
  const { totalPosts, postsPerPage, setCurrentPage, currentPage } = props;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className={`${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => setCurrentPage((prev) => (prev <= 1 ? prev : prev - 1))}
      >
        Prev
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        className={`${currentPage === pages.length ? "disabled" : ""}`}
        onClick={() =>
          setCurrentPage((prev) => (prev >= pages.length ? prev : prev + 1))
        }
      >
        Next
      </button>
    </div>
  );
}
