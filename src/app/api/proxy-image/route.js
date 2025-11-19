export const runtime = "nodejs";

export async function GET(req) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new Response("Missing url", { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://cardwarskingdom.fandom.com/"
      }
    });

    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") || "image/png",
        "Cache-Control": "public, max-age=86400"
      }
    });
  } catch (err) {
    console.error(err);
    return new Response("Failed", { status: 500 });
  }
}
