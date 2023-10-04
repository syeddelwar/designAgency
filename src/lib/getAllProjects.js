export default async function getAllProjects() {
  const res = await fetch(process.env.BASE_URL + `/AllProject`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
