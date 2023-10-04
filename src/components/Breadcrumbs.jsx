"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Breadcrumbs() {
  const pathname = usePathname();
  const routeArray = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className="flex pt-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        {routeArray.map((route, idx) => {
          return (
            <li key="idx">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <div
        
                  className={`ml-1 text-sm font-medium capitalize ${
                    routeArray.length === idx + 1 && "text-green-600 font-bold"
                  }`}
                >
                  {route}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
