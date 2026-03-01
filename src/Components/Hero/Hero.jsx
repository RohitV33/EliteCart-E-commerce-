import { useNavigate } from "react-router-dom";




export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center px-6 md:px-20">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center gap-6 group">
        <span className="text-sm font-semibold tracking-[0.3em] text-gray-600 uppercase transition-all duration-300 group-hover:text-gray-900">
          New Arrivals
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight transition-transform duration-300 group-hover:-translate-y-1">
          Discover the <br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Latest Fashion
          </span>
          <br />
          for Everyone
        </h1>

        <p className="max-w-xl text-gray-600 text-base md:text-lg transition-all duration-300 group-hover:text-gray-700">
          Elevate your style with our newest collections, crafted for comfort,
          confidence, and everyday elegance.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          
          <button  onClick={() => navigate("/products")} className="relative px-8 h-14 rounded-full bg-gray-900 text-white text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          
       
          <button onClick={() => navigate("/lookbook")} className="px-8 h-14 rounded-full border border-gray-900 text-gray-900 text-lg font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-xl">
            View Lookbook
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 hidden md:flex justify-center items-center group">
        <div className="relative transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop"
            alt="Fashion Collection"
            className="h-[520px] w-[420px] object-cover rounded-[3rem] shadow-2xl transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[3rem] border-2 border-gray-300 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
        </div>
      </div>

    </section>
  );
}