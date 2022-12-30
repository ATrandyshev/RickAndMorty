import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useResizeWindow } from "../../hooks/resize/useResizeWindow";

export const PaginationBasic = ({ countPages, onClick }) => {
  const firstPage = 1;
  const lastPage = countPages;
  const [currentPage, setCurrentPage] = useState(firstPage);
  let items = [];
  let { widthWindow } = useResizeWindow();
  let maxItems = 5;

  if (widthWindow <= 400) {
    maxItems = 1;
  } else if (widthWindow <= 576) {
    maxItems = 2;
  } else if (widthWindow <= 768) {
    maxItems = 3;
  }

  const isDisabled = (flag) => {
    let isDisabled = false;

    if (currentPage === firstPage && flag === "first") {
      isDisabled = true;
    } else if (currentPage === lastPage && flag === "last") {
      isDisabled = true;
    }

    return isDisabled;
  };

  const onChangePage = (numberPage) => {
    setCurrentPage(numberPage);
    onClick(numberPage);
  };

  const onTurnOverPage = (number) => {
    let page = currentPage + number;

    onChangePage(page);
  };

  for (let number = currentPage, i = 1; number <= lastPage; ++number, ++i) {
    let item = (
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );

    items.push(item);

    if (i === maxItems) {
      break;
    }
  }

  return (
    <Pagination size="lg">
      <Pagination.First
        disabled={isDisabled("first")}
        onClick={() => onChangePage(firstPage)}
      />
      <Pagination.Prev
        disabled={isDisabled("first")}
        onClick={() => onTurnOverPage(-1)}
      />

      {items}

      <Pagination.Next
        disabled={isDisabled("last")}
        onClick={() => onTurnOverPage(1)}
      />
      <Pagination.Last
        disabled={isDisabled("last")}
        onClick={() => onChangePage(lastPage)}
      />
    </Pagination>
  );
};
