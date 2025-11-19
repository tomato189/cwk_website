export const dynamic = "force-dynamic";

import * as cheerio from "cheerio";

const BASE = "https://cardwarskingdom.fandom.com";

const SECTION_TO_FACTION = [
  "Blue",
  "Corn",
  "Sandy",
  "Nice",
  "Swamp",
  "Ice"
];

export async function GET() {
  try {
    const url = `${BASE}/wiki/Creature_Book`;
    const html = await fetch(url, { cache: "no-store" }).then(r => r.text());
    const $ = cheerio.load(html);

    const items = [];
    let factionIndex = -1;

    $("h2, .wikia-gallery-item").each((_, el) => {
      const e = $(el);

      if (e.is("h2")) {
        const sectionText = e.text().trim();
        factionIndex++;
      }

      if (e.hasClass("wikia-gallery-item")) {
        const a = e.find("a.image.link-internal").first();
        const href = a.attr("href") || "";
        const img = a.find("img").attr("data-src") || a.find("img").attr("src") || "";
        const alt = a.find("img").attr("alt") || "";

        const name = alt.replace(/^#\d+\s*/i, "").trim();
        const id = href.split("/wiki/")[1]?.trim() || "";

        const faction =
          SECTION_TO_FACTION[factionIndex] || "Unknown";

        if (id && name && img) {
          items.push({
            id,
            name,
            image: img,
            faction,
            href: BASE + href
          });
        }
      }
    });

    return Response.json({ items });
  } catch (error) {
    console.error("Scrape Failed:", error);
    return Response.json({ items: [] });
  }
}
