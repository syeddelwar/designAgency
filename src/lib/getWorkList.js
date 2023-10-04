export default async function getWorkList() {
  const res = await fetch(process.env.BASE_URL + `/WorkList`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
