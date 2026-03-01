export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32">
      <div className="rounded-3xl bg-gray-50 py-20 px-8 md:px-24 text-center shadow-lg">

        {/* Heading */}
        <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
          Newsletter
        </span>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900">
          Get Exclusive Offers
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to receive special
          discounts, new arrivals, and style updates.
        </p>

        {/* Input */}
        <div className="mt-10 flex items-center justify-between bg-white max-w-2xl mx-auto h-[64px]
          rounded-full shadow-md border border-gray-200 overflow-hidden
          focus-within:ring-2 focus-within:ring-gray-900 transition">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-full px-8 outline-none text-gray-700 placeholder-gray-400"
          />

          <button className="h-full px-10 rounded-full bg-gray-900 text-white text-lg font-medium
            transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}