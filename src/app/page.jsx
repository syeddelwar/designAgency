import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";
import getHeroList from "@/lib/getHeroList";

export const metadata = {
  title: "Home - WebAgency",
};

const page = async() => {
  const heroList = await getHeroList();

  const {title, description, image1, image2, image3, image4} = heroList || {}

  return (
    <>
      <Hero title={title} description={description} images={[image1, image2, image3, image4]}  />
      <WorkList />
      <FeaturedProject />
      <Subscribe />
    </>
  );
};

export default page;
