export async function getData({ query }) {
  const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${query}`);
  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    return [];
  }
}
