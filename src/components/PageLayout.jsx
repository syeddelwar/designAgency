import React from "react";

function PageLayout({ children }) {
  return (
    <div className="max-w-screen-xl py-4 mx-auto px-5">{children}</div>
  );
}

export default PageLayout;
