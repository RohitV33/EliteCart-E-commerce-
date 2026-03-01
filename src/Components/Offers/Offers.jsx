import { useNavigate } from "react-router-dom";
export default function Offers() {
  const navigate=useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32">
      <div className="relative h-[50vh] rounded-3xl
        bg-gradient-to-br from-gray-100 to-white
        shadow-lg flex items-center">

        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-10 md:px-16">
          <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Limited Time
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Exclusive <br />
            <span className="text-gray-900">
              Offers For You
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Premium styles. Best sellers. Unmatched prices.
            Discover what everyone’s loving right now.
          </p>

          <button onClick={() => navigate("/products")} className="w-56 h-14 rounded-full bg-gray-900 text-white text-lg font-medium
            transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
            Shop the Deal
          </button>
        </div>
       
            <div  className="flex-1 hidden md:flex animate-float hover:scale-40transition items-center justify-center">
              <div className="rounded-2xl bg-gray-900 text-white px-10 py-8 shadow-xl">
                <p className="uppercase text-xs tracking-widest text-gray-400">
                  Today Only
                </p>
                <     h2 className="text-4xl font-bold mt-2">Flat 40% OFF</h2>
                  <p className="text-gray-300 mt-2">
                  On selected best sellers
                </p>
              </div>
            </div>
      </div>
    </section>
  );
}