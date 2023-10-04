export default async function getHeroList() {
  const res = await fetch(process.env.BASE_URL + `/HeroList`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
