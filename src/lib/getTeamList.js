export default async function getTeamList() {
  const res = await fetch(process.env.BASE_URL + `/TeamList`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
