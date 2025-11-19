"use client";
const items=[
  {img:"/images/228_20241004201657.webp",text:"The PvP mode is finally back online! Intense battles and player challenges make the experience even more thrilling."},
  {img:"/images/244_20241005011056.webp",text:"Get ready for a Halloween celebration with our new heroes! Discover unique characters with special powers."},
  {img:"/images/Adventure-Time-Cartoon-Network-Dark-Souls-Jake-Finn-the-Human-Princess-Bubblegum-1954791-wallhere.com.jpg",text:"The Halloween theme was fixed! Enjoy spooky designs, new quests, and hidden treasures."}
];
export default function NewsCards(){
  return(
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-extrabold">FIND MORE ABOUT CARD WARS KINGDOM</h3>
            <p className="text-white/70">The future of Card Wars Kingdom is here.</p>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-xl">
              <img src={it.img} alt="" className="h-44 w-full object-cover group-hover:scale-[1.02] transition"/>
              <div className="p-4">
                <p className="text-white/90 text-sm leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
