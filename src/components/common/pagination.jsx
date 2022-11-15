import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCounts, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCounts / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link clickable"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCounts: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
  currentPage: PropTypes.func.isRequired,
};

export default Pagination;
