import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import Subscribe from "@/components/Subscribe";
import TestimonialsCard from "@/components/TestimonialsCard";
import getTestimonials from "@/lib/getTestimonials";
import React from "react";

export const metadata = {
  title: "Testimonials - WebAgency",
};

const page = async () => {
  const testimonials = await getTestimonials();
  // console.log(testimonials)

  return (
    <>
      <PageHeader />
      <div className="py-8">
        <PageLayout>
          <PageTitle
            title="Testimonial List"
            pageDes="Better Agency/SEO Solution At Your Fingertips"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {/* code..... */}
            {testimonials.map((testimonial, idx) => {
              const { name, designation, image, msg } = testimonial || {};
              return (
                <TestimonialsCard
                  name={name}
                  designation={designation}
                  imgSrc={image}
                  msg={msg}
                  key={idx}
                />
              );
            })}
          </div>
        </PageLayout>
      </div>
      <Subscribe />
    </>
  );
};

export default page;
