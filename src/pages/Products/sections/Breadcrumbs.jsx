import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  return (
    <div className=" p-4">
      <div className="flex items-center gap-2">
        {paths.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="space-x-2 flex items-center"
          >
            {item.path === "/" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            )}{" "}
            <span className="text-xs font-semibold text-gray-500 ">
              {item.name}
            </span>
            {idx !== paths.length - 1 && (
              <span className="text-xs font-semibold text-gray-500">/</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
