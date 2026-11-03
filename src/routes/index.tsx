import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart, Search, ShoppingBag, X, Star, ArrowRight, Minus, Plus } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products, inr, type Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StyleCraft — Considered Fashion, Made to Last" },
      { name: "description", content: "Shop StyleCraft's curated edit of outerwear, dresses, shoes and accessories. Timeless pieces, delivered across India." },
      { property: "og:title", content: "StyleCraft — Considered Fashion" },
      { property: "og:description", content: "A curated edit of timeless pieces for a slower, better wardrobe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = ["All", "Outerwear", "Dresses", "Tops", "Bottoms", "Shoes", "Accessories"];
const sorts = { featured: "Featured", low: "Price: Low to High", high: "Price: High to Low", rating: "Highest Rated" } as const;

function Index() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<keyof typeof sorts>("featured");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [wish, setWish] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"bag" | "checkout" | "done">("bag");
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const list = useMemo(() => {
    let l = products.filter(
      (p) => (cat === "All" || p.category === cat) && (p.name + p.brand).toLowerCase().includes(q.toLowerCase()),
    );
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [cat, q, sort]);

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const items = products.filter((p) => cart[p.id]);
  const total = items.reduce((s, p) => s + p.price * (cart[p.id] ?? 0), 0);
  const add = (id: number, d = 1) =>
    setCart((c) => {
      const n = { ...c, [id]: (c[id] ?? 0) + d };
      if ((n[id] ?? 0) <= 0) delete n[id];
      return n;
    });

  return (
    <div className="min-h-screen">
      <div className="bg-ink py-2 text-center text-ink-foreground eyebrow">Complimentary shipping on orders over ₹4,999</div>

      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <nav className="hidden gap-8 eyebrow md:flex">
            <a href="#shop" className="hover:text-accent">Shop</a>
            <a href="#edit" className="hover:text-accent">The Edit</a>
            <a href="#story" className="hover:text-accent">Story</a>
          </nav>
          <a href="#" className="font-display text-3xl tracking-tight">StyleCraft</a>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Heart className="h-4 w-4" /> {wish.length}
            </span>
            <button onClick={() => { setStep("bag"); setOpen(true); }} className="relative" aria-label="Open bag">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">{count}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Model in a camel wool coat" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <p className="eyebrow animate-rise text-accent">Autumn / Winter 2026</p>
          <h1 className="mt-6 max-w-xl animate-rise text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: ".1s" }}>
            Quiet pieces,<br /><em className="text-accent">lasting</em> style.
          </h1>
          <p className="mt-6 max-w-md animate-rise text-muted-foreground" style={{ animationDelay: ".2s" }}>
            A curated edit of timeless outerwear, soft tailoring and everyday essentials — made to be worn for years.
          </p>
          <div className="mt-10 flex animate-rise gap-4" style={{ animationDelay: ".3s" }}>
            <a href="#shop" className="inline-flex items-center gap-3 bg-primary px-8 py-4 eyebrow text-primary-foreground transition hover:bg-accent">
              Shop the collection <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#edit" className="inline-flex items-center border border-foreground px-8 py-4 eyebrow transition hover:bg-foreground hover:text-background">
              The Edit
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y py-5">
        <div className="flex w-max animate-marquee gap-12 font-display text-2xl italic text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Responsibly sourced", "Free returns within 30 days", "Crafted in small batches", "Delivered across India"].map((t) => (
              <span key={k + t} className="flex items-center gap-12">{t}<span className="text-accent">✦</span></span>
            )),
          )}
        </div>
      </div>

      {/* Edit */}
      <section id="edit" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow text-accent">The Edit</p>
            <h2 className="mt-3 text-5xl">Shop by mood</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Outerwear", img: products[0]!.image },
            { t: "Dresses", img: products[1]!.image },
            { t: "Accessories", img: products[3]!.image },
          ].map((c, i) => (
            <a key={c.t} href="#shop" onClick={() => setCat(c.t)} className={`group relative block overflow-hidden ${i === 1 ? "md:translate-y-12" : ""}`}>
              <img src={c.img} alt={c.t} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-ink-foreground">
                <h3 className="text-3xl">{c.t}</h3>
                <span className="eyebrow opacity-80">Discover →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 text-center">
          <p className="eyebrow text-accent">The Collection</p>
          <h2 className="mt-3 text-5xl md:text-6xl">Everyday essentials</h2>
        </div>
        <div className="mb-10 flex flex-col gap-6 border-y py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 border-b border-foreground/30 pb-1">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-36 bg-transparent text-sm outline-none" />
            </label>
            <select value={sort} onChange={(e) => setSort(e.target.value as keyof typeof sorts)} className="bg-transparent text-sm outline-none">
              {Object.entries(sorts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
        </div>
        {list.length === 0 ? (
          <p className="py-20 text-center font-display text-2xl italic text-muted-foreground">Nothing found — try another search.</p>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} liked={wish.includes(p.id)}
                onLike={() => setWish((w) => (w.includes(p.id) ? w.filter((x) => x !== p.id) : [...w, p.id]))}
                onAdd={() => { add(p.id); setStep("bag"); setOpen(true); }} />
            ))}
          </div>
        )}
      </section>

      {/* Story */}
      <section id="story" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:items-center">
          <h2 className="text-5xl leading-tight md:text-6xl">Fewer, better things. <em className="text-accent">That's the whole idea.</em></h2>
          <div className="space-y-6 opacity-80">
            <p>StyleCraft began in New Delhi with a simple belief: a wardrobe should feel like a collection, not a pile. Every piece we carry is chosen for its fabric, its fit and how long it will stay with you.</p>
            <div className="grid grid-cols-3 gap-6 border-t border-ink-foreground/20 pt-6">
              {[["30", "Day returns"], ["4.7★", "Avg. rating"], ["10k+", "Happy customers"]].map(([n, l]) => (
                <div key={l}><div className="font-display text-4xl text-ink-foreground">{n}</div><div className="eyebrow mt-1">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="text-5xl">Letters from the studio</h2>
        <p className="mt-4 text-muted-foreground">New arrivals, styling notes and early access — once a month, never more.</p>
        {joined ? (
          <p className="mt-8 font-display text-2xl italic text-accent">Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setJoined(true); }} className="mx-auto mt-8 flex max-w-md border-b border-foreground">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="flex-1 bg-transparent py-3 outline-none" />
            <button className="eyebrow hover:text-accent">Subscribe</button>
          </form>
        )}
      </section>

      <footer className="border-t">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <div className="font-display text-3xl">StyleCraft</div>
            <p className="mt-3 text-sm text-muted-foreground">Premium fashion, thoughtfully curated.</p>
          </div>
          {[
            ["Shop", ["New Arrivals", "Collections", "Sale", "Size Guide"]],
            ["Help", ["Shipping", "Returns & Exchanges", "FAQ", "Contact"]],
            ["Contact", ["New Delhi", "+91 8888822222", "hello@stylecraft.com"]],
          ].map(([h, ls]) => (
            <div key={h as string}>
              <h4 className="eyebrow mb-4 font-sans">{h as string}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">{(ls as string[]).map((l) => <li key={l}>{l}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="border-t py-6 text-center text-xs text-muted-foreground">© 2026 StyleCraft. All rights reserved.</div>
      </footer>

      {/* Bag drawer */}
      {open && <div className="fixed inset-0 z-50 bg-ink/40 animate-in fade-in" onClick={() => setOpen(false)} />}
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b p-6">
          <h3 className="text-3xl">{step === "bag" ? `Your bag (${count})` : step === "checkout" ? "Checkout" : "Order placed"}</h3>
          <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        {step === "bag" && (
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {items.length === 0 && <p className="font-display text-xl italic text-muted-foreground">Your bag is empty.</p>}
            {items.map((p) => (
              <div key={p.id} className="flex gap-4">
                <img src={p.image} alt={p.name} className="h-28 w-22 object-cover" />
                <div className="flex flex-1 flex-col">
                  <span className="eyebrow text-muted-foreground">{p.brand}</span>
                  <span className="font-display text-xl">{p.name}</span>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 border px-2 py-1">
                      <button onClick={() => add(p.id, -1)} aria-label="Less"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm">{cart[p.id]}</span>
                      <button onClick={() => add(p.id)} aria-label="More"><Plus className="h-3 w-3" /></button>
                    </div>
                    <span>{inr(p.price * (cart[p.id] ?? 0))}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {step === "checkout" && (
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            <div className="space-y-2 border-b pb-4 text-sm">
              {items.map((p) => (
                <div key={p.id} className="flex justify-between">
                  <span className="text-muted-foreground">{p.name} × {cart[p.id]}</span>
                  <span>{inr(p.price * (cart[p.id] ?? 0))}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{total >= 4999 ? "Free" : inr(199)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-display text-xl"><span>Total</span><span>{inr(total + (total >= 4999 ? 0 : 199))}</span></div>
            </div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setCart({});
                setStep("done");
              }}
            >
              {([["name", "Full name"], ["email", "Email"], ["address", "Delivery address"]] as const).map(([k, label]) => (
                <label key={k} className="block">
                  <span className="eyebrow text-muted-foreground">{label}</span>
                  {k === "address" ? (
                    <textarea
                      required
                      rows={2}
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="mt-1 w-full border-b border-foreground/30 bg-transparent py-2 outline-none focus:border-foreground"
                    />
                  ) : (
                    <input
                      required
                      type={k === "email" ? "email" : "text"}
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="mt-1 w-full border-b border-foreground/30 bg-transparent py-2 outline-none focus:border-foreground"
                    />
                  )}
                </label>
              ))}
              <button type="submit" className="w-full bg-primary py-4 eyebrow text-primary-foreground transition hover:bg-accent">
                Place order
              </button>
            </form>
          </div>
        )}
        {step === "done" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="font-display text-3xl italic text-accent">Thank you, {form.name.split(" ")[0] || "friend"}.</p>
            <p className="text-muted-foreground">Your order is confirmed. A confirmation email is on its way to {form.email || "your inbox"}.</p>
            <button
              onClick={() => { setStep("bag"); setOpen(false); }}
              className="mt-4 border border-foreground px-8 py-3 eyebrow transition hover:bg-foreground hover:text-background"
            >
              Continue shopping
            </button>
          </div>
        )}
        {step === "bag" && items.length > 0 && (
          <div className="border-t p-6">
            <div className="mb-4 flex justify-between font-display text-2xl"><span>Subtotal</span><span>{inr(total)}</span></div>
            <button onClick={() => setStep("checkout")} className="w-full bg-primary py-4 eyebrow text-primary-foreground transition hover:bg-accent">Checkout</button>
          </div>
        )}
      </aside>
    </div>
  );
}

function ProductCard({ p, liked, onLike, onAdd }: { p: Product; liked: boolean; onLike: () => void; onAdd: () => void }) {
  const off = Math.round((1 - p.price / p.originalPrice) * 100);
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-background px-2 py-1 text-[10px] tracking-widest">−{off}%</span>
        <button onClick={onLike} aria-label="Wishlist" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90">
          <Heart className={`h-4 w-4 ${liked ? "fill-accent text-accent" : ""}`} />
        </button>
        <button onClick={onAdd} className="absolute inset-x-3 bottom-3 translate-y-[150%] bg-primary py-3 eyebrow text-primary-foreground transition duration-300 group-hover:translate-y-0 max-lg:translate-y-0">
          Add to bag
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="eyebrow text-muted-foreground">{p.brand}</p>
          <h3 className="mt-1 text-xl leading-tight">{p.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3 w-3 fill-accent text-accent" />{p.rating} ({p.reviews})</p>
        </div>
        <div className="text-right text-sm">
          <div>{inr(p.price)}</div>
          <div className="text-xs text-muted-foreground line-through">{inr(p.originalPrice)}</div>
        </div>
      </div>
    </div>
  );
}
