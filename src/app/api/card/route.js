export const dynamic = "force-dynamic";

import * as cheerio from "cheerio";

const BASE = "https://cardwarskingdom.fandom.com";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return new Response(JSON.stringify({ error: "missing id" }), { status: 400 });

  const url = `${BASE}/wiki/${encodeURIComponent(id)}`;
  const html = await fetch(url, { cache: "no-store" }).then(r => r.text());
  const $ = cheerio.load(html);

  const title = $('aside.portable-infobox [data-source="title"]').first().text().trim() || $("h1").first().text().trim();

  const mainImgNode = $('aside.portable-infobox figure[data-source="image"] img').first();
  const mainImage = mainImgNode.attr("srcset")?.split(" ")?.[0] || mainImgNode.attr("src") || "";

  const pick = s => $(`aside.portable-infobox .pi-data[data-source="${s}"] .pi-data-value`).first().text().trim();
  const creatureNo = pick("crdno");
  const faction = pick("faction");
  const rarity = pick("rarity");

  const dragCost = pick("dragcost");
  const hp = pick("hp");
  const atk = pick("atk");
  const mgc = pick("mgc");
  const crt = pick("crt");

  const yields = [];
  $('table:contains("can yield") img').each((_, el) => {
    const i = $(el);
    const src = i.attr("src") || "";
    const parentA = i.closest("a");
    const yhref = parentA.attr("href") ? BASE + parentA.attr("href") : "";
    const yid = parentA.attr("href")?.split("/wiki/")[1] || "";
    yields.push({ image: src, id: yid, href: yhref });
  });

  const requirements = [];
  $('h2:contains("Enhance")').nextAll('table:contains("Level")').first().find("tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length >= 2) {
      const levelText = $(tds[0]).text().replace(/\s+/g, " ").trim();
      const imgs = [];
      $(tds[1]).find("img").each((__, img) => imgs.push($(img).attr("src") || ""));
      if (levelText) requirements.push({ level: levelText, images: imgs });
    }
  });

  const stats = { dragCost, hp, atk, mgc, crt };
  const data = { id, title, image: mainImage, creatureNo, faction, rarity, stats, yields, requirements };

  return new Response(JSON.stringify(data), { headers: { "content-type": "application/json" } });
}
