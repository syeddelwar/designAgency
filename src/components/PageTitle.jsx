import React from "react";
import PageLayout from "./PageLayout";

function PageTitle({title, pageDes}) {
  return (
      <div className="pb-10 max-w-[350px]">
        <div className="text-green-600 text-uppercase font-semibold">{title || "Title"}</div>
        <div className="text-2xl pt-3 font-bold">{pageDes || "des error"}</div>
      </div>
  );
}

export default PageTitle;
