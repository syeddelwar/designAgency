import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";
import Subscribe from "@/components/Subscribe";
import getAllProjects from "@/lib/getAllProjects";
import React from "react";

export const metadata = {
  title: "Projects - WebAgency",
};

const page = async () => {
  const projects = await getAllProjects();
  // console.log(projects)

  return (
    <>
      {" "}
      <PageHeader />
      <div className="py-8">
        <PageLayout>
          <PageTitle
            title="All Project"
            pageDes="Better Agency/SEO Solution At Your Fingertips"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            {/* code..... */}
            {projects.map((project, idx) => {
              const { title, image } = project || {};
              return <ProjectCard title={title} imgSrc={image} key={idx} />;
            })}
          </div>
        </PageLayout>
      </div>
      <Subscribe />
    </>
  );
};

export default page;
