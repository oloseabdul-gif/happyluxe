import Link from "next/link";

const products = [
  {
    name: "The Everyday Essential",
    category: "NEW ARRIVAL",
    price: "₦35,000",
    image: "photo-1529139574466-a303027c1d8b",
  },
  {
    name: "Modern Elegance",
    category: "WOMENSWEAR",
    price: "₦48,000",
    image: "photo-1539109136881-3be0616acf4b",
  },
  {
    name: "The Classic Edit",
    category: "MENSWEAR",
    price: "₦42,000",
    image: "photo-1515886657613-9f3515b0c78f",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#201d1a]">
      <div className="bg-[#29251f] px-4 py-2 text-center text-xs tracking-[0.15em] text-white">
        DISCOVER YOUR EVERYDAY LUXURY
      </div>

      <header className="border-b border-black/10 bg-[#faf8f5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <Link href="/" className="text-2xl font-semibold tracking-[0.2em]">
            HAPPYLUXE
          </Link>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#new-arrivals" className="hover:opacity-60">
              New Arrivals
            </a>
            <a href="#collection" className="hover:opacity-60">
              Collection
            </a>
            <a href="#about" className="hover:opacity-60">
              Our Story
            </a>
          </nav>

          <a
            href="https://wa.me/"
            className="border border-[#29251f] px-4 py-2 text-xs tracking-wider hover:bg-[#29251f] hover:text-white"
          >
            CONTACT US
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#d8cfc2]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(25,22,19,.72), rgba(25,22,19,.08)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
          <p className="mb-6 text-xs tracking-[0.35em]">
            STYLE THAT FEELS LIKE YOU
          </p>

          <h1 className="max-w-2xl text-5xl font-light leading-tight sm:text-7xl">
            Everyday style.
            <br />
            Extraordinary you.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-white/85">
            Discover timeless pieces, effortless elegance, and a wardrobe
            made for the moments that matter.
          </p>

          <a
            href="#new-arrivals"
            className="mt-9 inline-block bg-white px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#29251f] transition hover:bg-[#e8dfd4]"
          >
            EXPLORE THE COLLECTION
          </a>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-[#8b7764]">
            THE HAPPYLUXE EDIT
          </p>
          <h2 className="mt-4 text-3xl font-light sm:text-4xl">
            Made for your moments
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-600">
            Thoughtfully selected styles that bring confidence,
            comfort, and a little luxury to every day.
          </p>
        </div>

        <div
          id="new-arrivals"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="overflow-hidden bg-[#e9e3dc]">
                <img
                  src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=85`}
                  alt={product.name}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-[#8b7764]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg">{product.name}</h3>
                  <p className="mt-2 text-sm">{product.price}</p>
                </div>

                <a
                  href="https://wa.me/"
                  className="mt-1 border-b border-black pb-1 text-xs"
                >
                  ENQUIRE
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#e9e3dc] px-6 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8b7764]">
          OUR PHILOSOPHY
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-4xl">
          Luxury is not just what you wear.
          It is how you feel.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600">
          HappyLuxe celebrates personal style through carefully
          selected fashion pieces designed to make every day
          feel special.
        </p>
      </section>

      <footer className="bg-[#29251f] px-6 py-12 text-center text-white">
        <h2 className="text-xl tracking-[0.2em]">HAPPYLUXE</h2>
        <p className="mt-4 text-sm text-white/70">
          Your style. Your confidence. Your moment.
        </p>
        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} HappyLuxe. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
