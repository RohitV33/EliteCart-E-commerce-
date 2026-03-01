export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">

        {/* Top */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            EliteCart
          </h2>

          <p className="text-gray-600 max-w-md">
            Premium fashion & lifestyle products curated for everyday style and comfort.
          </p>

          <ul className="flex flex-wrap justify-center gap-8 text-gray-600 font-medium mt-4">
            {["Company", "Products", "Offices", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors duration-300 hover:text-gray-900"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 EliteCart. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}