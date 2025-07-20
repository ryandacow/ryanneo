const OCEAN_API_URL = process.env.OCEAN_API_URL;

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(`${OCEAN_API_URL}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.ok ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
