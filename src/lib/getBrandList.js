export default async function getBrandList() {
  const res = await fetch(process.env.BASE_URL + `/BrandList`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
