export default async function getTestimonials() {
  const res = await fetch(process.env.BASE_URL + `/TestimonialList`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
