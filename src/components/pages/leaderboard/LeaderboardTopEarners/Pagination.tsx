"use client";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage: number = 3;
  const endOffset: number = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {}, [itemOffset]);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    console.log(newOffset);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={5}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination pages pagination"}
        activeClassName={"active"}
        hrefBuilder={() => "URL:void(0)"}
      />
    </>
  );
};

export default Pagination;
