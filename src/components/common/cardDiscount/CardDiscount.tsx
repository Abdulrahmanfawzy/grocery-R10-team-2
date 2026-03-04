import { Card } from "@/components/ui/card"
import backgroundImage from "../../../assets/Web/Hi-Fi/Hero/Rectangle 1.png"
import { Button } from "@/components/ui/button"
const CardDiscount = () => {
  return (
    <Card style={{backgroundImage :`url('${backgroundImage}')`}} className="relative p-4 overflow-hidden text-white ">
        {/* overlay */}
        <div className="absolute inset-0 bg-primary"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col  justify-between h-full">
           <div className="mt-6">
             <h1 className="text-4xl  font-bold text-center mb-4">10% OFF</h1>
            <p className="text-lg text-center">For new member sign up at the first time</p>
           </div>

            {/* Email Input */}
        <div className="">

        <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" placeholder="Enter your email"  className="w-full p-3 outline-none bg-white rounded-xl text-gray-700"/>
        </div>
        {/* Email password Input */}

        <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input type="password" id="password" placeholder="Enter your password"  className="w-full p-3 outline-none bg-white rounded-xl text-gray-700"/>
        </div>
        </div>

        {/* Button */}
        <Button variant="primary" className="w-full mt-4 cursor-pointer">Register Now</Button>
        </div>
    </Card>
  )
}

export default CardDiscount