export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "API Key is missing." }, { status: 500 });
  }

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    const data = await response.json();
    // console.log(data);
    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
