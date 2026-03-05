import { Button } from "@/components/ui/button"
// import Container from "../Container"
import ImageCard1 from "../../assets/img/Offer1-img.png"
import ImageCard2 from "../../assets/img/Offer2-img.png"

import Container from "../common/Container"
const PromomSection = () => {
    return (
        <div className="py-12">
            <Container>
                <div className=" mx-auto grid md:grid-cols-2 gap-2">
                    {/* card1 */}
                    <div className="bg-gray-200 rounded-2xl pt-8 px-8 flex items-center justify-between overflow-hidden relative">
                        <div className="space-y-6 max-w-xs relative z-10">
                            <span className="bg-primary text-white text-sm px-4 py-1 rounded-full ">Free delivery</span>
                            <h2 className="text-3xl font-bold text-gray-800 ">Free delivery over £50</h2>
                            <p className="text-gray-500 font-medium">Shop £50 product and get free delivery anywhere.</p>
                            <Button variant="primary" className="mt-4 px-8 py-6 cursor-pointer">Shop Now</Button>
                        </div>
                        <img src={ImageCard1} alt="image" className=" object-contain absolute bottom-0 right-0   " />
                    </div>
                    {/* card2 */}
                    <div className="bg-primary relative rounded-2xl py-8 px-8 flex items-center justify-between overflow-hidden">
                        <div className="space-y-14 max-w-xs relative z-10">
                            <span className="bg-gray-200 text-primary text-sm px-4 py-1 rounded-full ">60% off</span>
                            <h2 className="text-3xl font-bold text-gray-800 ">Organic Food</h2>
                            <p className="text-white font-medium">Save up to 60% off on your first order</p>
                            <Button variant="secondary" className="mt-4 px-8 py-6 text-primary cursor-pointer">Shop Now</Button>
                        </div>
                        <img src={ImageCard2} alt="image" className=" object-contain absolute bottom-0 right-0   " />
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default PromomSection