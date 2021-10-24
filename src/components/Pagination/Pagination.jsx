import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { cleanPaginate } from '@myapp/common/lib/utils/index';
import { Link } from 'react-router-dom';
import {
  FirstPageButton,
  LastPageButton,
  NextPageButton,
  PrevPageButton,
} from './PaginationButtons';

const Pagination = ({
  hasNextPage,
  hasPrevPage,
  limit,
  nextPage,
  prevPage,
  page,
  pagingCounter,
  totalDocs,
  totalPages,
  pagePrefix,
}) => {
  if (!page) return '';
  const paginations = cleanPaginate(totalPages, page, 10, pagingCounter);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return (
    <Fragment>
      <div className="flex justify-between items-center align-middle text-sm font-normal">
        <div className="flex justify-center items-center align-middle ml-0">
          <span className="inline-block text-xs text-theme-gray-600">
            {`Displaying ${startIndex}-${
              endIndex < totalDocs ? endIndex : totalDocs
            } of ${totalDocs}`}
          </span>
        </div>
        <div className="flex justify-center items-center align-middle mr-0">
          <div className="h-8 w-auto px-4 text-xs mr-1 flex justify-center items-center rounded-full bg-white">
            {`Page: ${page}/${totalPages}`}
          </div>
          <div className="flex text-theme-gray-700">
            <Fragment>
              <FirstPageButton
                pageNo={1}
                pagePrefix={pagePrefix}
                disable={!hasPrevPage}
              />
              <PrevPageButton
                pagePrefix={pagePrefix}
                pageNo={prevPage}
                disable={!hasPrevPage}
              />
            </Fragment>
            <div className="flex h-8 font-medium rounded-full bg-white">
              {paginations.pages.map((item) => (
                <Link
                  key={item}
                  to={`${pagePrefix}${item}`}
                  className={`w-8 text-xs md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-normal hover:font-bold mr-1
                ${
                  item === page
                    ? 'text-white bg-theme-pink-500 hover:text-white'
                    : 'hover:text-theme-pink-900 hover:bg-theme-pink-200'
                }
                `}
                >
                  {item}
                </Link>
              ))}
            </div>
            <NextPageButton
              pagePrefix={pagePrefix}
              pageNo={nextPage}
              disable={!hasNextPage}
            />
            <LastPageButton
              pagePrefix={pagePrefix}
              disable={!hasNextPage}
              pageNo={totalPages}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Pagination.propTypes = {
  hasNextPage: PropTypes.bool,
  hasPrevPage: PropTypes.bool,
  limit: PropTypes.number,
  nextPage: PropTypes.number,
  page: PropTypes.number,
  pagingCounter: PropTypes.number,
  prevPage: PropTypes.number,
  totalDocs: PropTypes.number,
  totalPages: PropTypes.number,
  pagePrefix: PropTypes.string,
  onClick: PropTypes.func,
};

export default Pagination;
