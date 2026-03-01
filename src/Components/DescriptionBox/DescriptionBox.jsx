export default function DescriptionBox({ product }) {
  return (
    <div className="px-10 md:px-20 my-24 max-w-7xl mx-auto">
      <div className="flex">
        <div className="border px-8 py-4 font-semibold cursor-pointer border-b-0">Description</div>
        <div className="border px-8 py-4 bg-gray-50 cursor-pointer text-gray-500">Reviews (122)</div>
      </div>
      <div className="border p-10 text-gray-600 flex flex-col gap-6 leading-relaxed bg-white">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual storefront where businesses and individuals can showcase their products, interact with customers, and process transactions without the need for a physical presence.</p>
        <p className="font-medium text-gray-800">Product Specifics:</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}