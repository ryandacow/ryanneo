export async function fetchOceanTraits(text) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_OCEAN_API_URL}/analyze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch OCEAN traits");
  }

  const data = await response.json();
  return data;
}
