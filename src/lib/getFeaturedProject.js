export default async function getFeaturedProject() {
  const res = await fetch(process.env.BASE_URL + `/FeaturedProject`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
