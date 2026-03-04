
export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl border p-4 hover:shadow-lg transition duration-300">
      <div className="relative aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
          -20%
        </span>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          className="h-32 object-contain"
        />
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-800">
        Premium Organic Orange - 1KG
      </h3>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-base font-semibold text-gray-900">
        20
        </span>
        <span className="text-sm text-gray-400 line-through">
           30
        </span>
      </div>
      <button className="mt-4 w-full bg-[#0F3D53] text-white py-2 rounded-xl hover:opacity-90 transition">
        Add To Cart
      </button>
    </div>
  );
}