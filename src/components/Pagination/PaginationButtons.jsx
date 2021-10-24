import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PaginationButton = ({ icon, disable, pageNo, pagePrefix }) => {
  if (disable) {
    return (
      <div className="h-8 w-8 text-xs mr-1 flex justify-center items-center rounded-full bg-pink-50 cursor-default text-gray-400">
        {icon}
      </div>
    );
  }
  return (
    <Link
      to={`${pagePrefix}${pageNo}`}
      className="h-8 w-8 text-xs mr-1 flex justify-center items-center rounded-full bg-theme-pink-50 cursor-pointer hover:text-white hover:bg-theme-pink-500"
    >
      {icon}
    </Link>
  );
};

export const PrevPageButton = ({ ...props }) => (
  <PaginationButton
    {...props}
    icon={
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    }
  />
);

export const FirstPageButton = ({ ...props }) => (
  <PaginationButton
    {...props}
    icon={
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    }
  />
);
export const NextPageButton = ({ ...props }) => (
  <PaginationButton
    {...props}
    icon={
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    }
  />
);

export const LastPageButton = ({ ...props }) => (
  <PaginationButton
    {...props}
    icon={
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    }
  />
);

PaginationButton.propTypes = {
  icon: PropTypes.node,
  disable: PropTypes.bool,
  pageNo: PropTypes.number,
  pagePrefix: PropTypes.string,
};
