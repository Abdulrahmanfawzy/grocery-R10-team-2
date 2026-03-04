import imgProduct from "../../assets/Product Image.png";
export default function CartItem() {
  return   <>
                  <div className="flex gap-6 p-6 border-t">
                    <div className="flex items-center flex-col gap-2">
                      <img
                        src={imgProduct}
                        alt=""
                        className="w-16 h-16 object-contain"
                      />
                      <div>
                        <span className="inline-block px-3 py-1 text-xs rounded-md bg-black text-white">
                          In Stock
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-3">
                      <h3 className="text-md font-medium text-gray-800">
                        Premium Organic Orange - 1KG
                      </h3>
                      <div className="flex gap-12 items-center">
                        <div className="flex items-center border rounded-md px-4 py-1 gap-6 ">
                          <span className="text-blue-600 font-semibold text-lg cursor-pointer">
                            -
                          </span>
                          <span className="text-sm">1</span>
                          <span className="text-blue-600 font-semibold text-lg cursor-pointer">
                            +
                          </span>
                        </div>
                        <span className="font-medium text-gray-800 text-md">20</span>
                      </div>
                    </div>
                  </div>
    </>
  
}
