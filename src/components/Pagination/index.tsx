import React, { useContext } from "react";

import { PageContext } from "../../contexts/PageContext";

import S from "./Pagination.module.css";

const Pagination = () => {
  const { previousPage, nextPage, page, setPage } = useContext(PageContext);
  
  return (
    <div>
      <button
        style={{ width: "60px", padding: "10px 12px" }}
        onClick={previousPage}
      >
        {"<"}
      </button>
      <input
        type="text"
        onChange={(e) => setPage(Number(e.target.value))}
        value={page}
      />
      <button
        style={{ width: "60px", padding: "10px 12px" }}
        onClick={nextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
