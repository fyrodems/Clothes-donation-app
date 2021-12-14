import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const TabPanel = ({ array, description, value, index }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const elementsPerPage = 3;
  const seenElements = pageNumber * elementsPerPage;

  const displayElements = (array) => {
    const slicedArray = array
      .slice(seenElements, seenElements + elementsPerPage)
      .map((elem, index) => {
        return (
          <li className="list__element" key={index}>
            <div className="element__field">
              <span>{elem.name}</span>
              <span>{elem.aim}</span>
            </div>
            <div>
              <span>{elem.donation}</span>
            </div>
          </li>
        );
      });
    return slicedArray;
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {value === index && (
        <>
          <p className="organizations__content">{description}</p>
          <ul>{displayElements(array)}</ul>
          {array.length > 3 ? (
            <ReactPaginate
              pageCount={Math.ceil(array.length / elementsPerPage)}
              onPageChange={changePage}
              containerClassName={"pagination__container"}
              disabledClassName={"pagination__disabled"}
              activeClassName={"pagination__active"}
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default TabPanel;
