import Image from "next/image";
import PageLayout from "./PageLayout";
import getFeaturedProject from "@/lib/getFeaturedProject";

const FeaturedProject = async() => {
  const featuredProjects = await getFeaturedProject();
  const filteredArray = featuredProjects.slice(0, 5);

  return (
    <div className="bg-[#D7F5DC] min-h-screen">
      <PageLayout>
        <div className="my-16">
          <div>
            <h2 className="text-[#20B15A] uppercase font-medium">
              Featured Project
            </h2>
            <h1 className="font-bold my-2 text-2xl">
              We provide the Perfect Solution <br /> to your business growth
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:[&>*:first-child]:h-full md:[&>*:first-child]:row-span-2 md:[&>*:first-child]:col-span-2 md:[&>*]:col-span-1 gap-10 place-items-center mt-24">
            {filteredArray.map((project, idx) => {
              const {image, title, remark} = project || {}
              return(
                <div key={idx} className="md:flex md:flex-col md:h-full">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    className="w-fit h-full object-cover"
                    src={image}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                  /></div>
                  <div><p className="text-[#2E3E5C] my-2 capitalize">{remark} - June 20, 2022</p>
                  <h1 className="font-semibold text-[20px]">{title}</h1></div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default FeaturedProject;
