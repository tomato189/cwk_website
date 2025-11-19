export async function GET() {
  try {
    const response = await fetch(
      "https://cardwarskingdom.pythonanywhere.com/online_players",
      { cache: "no-store" }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ online: "N/A" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
}
