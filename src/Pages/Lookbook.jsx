import { useNavigate } from "react-router-dom";

export default function Lookbook() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="w-full h-[300px] md:h-[450px] object-cover"
          alt="Lookbook"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Winter Lookbook
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Curated styles for the season
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Shop Collection
          </button>
        </div>
      </div>

      {/* COLLECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Women */}
        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-2">
              Women Collection
            </h2>
            <button
              onClick={() => navigate("/womens")}
              className="w-fit px-5 py-2 bg-white text-black rounded-full text-sm font-medium"
            >
              Shop This Look
            </button>
          </div>
        </div>

        {/* Men */}
        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
            className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-2">
              Men Collection
            </h2>
            <button
              onClick={() => navigate("/mens")}
              className="w-fit px-5 py-2 bg-white text-black rounded-full text-sm font-medium"
            >
              Shop This Look
            </button>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to upgrade your style?
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:opacity-90 transition"
        >
          Explore All Products
        </button>
      </div>

    </div>
  );
}