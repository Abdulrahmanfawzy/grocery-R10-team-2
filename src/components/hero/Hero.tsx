import Container from "../common/Container"
import backgroundImage from "../../assets/Hero/Rectangle 1.png"
// import ImageRight from "../../../assets/Web/Hi-Fi/Hero/heroimg.png";
import { Button } from "@/components/ui/button"
const Hero = () => {
  return (
    <div className=" relative w-full  py-10 bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {/* Color overlay */}
      <div className="absolute inset-0 z-0 bg-primary bg-opacity-50"></div>
      <Container>
        <div className="relative z-10 flex items-center justify-between h-96">
          {/* Left Content */}
          <div className="max-w-xl space-y-6 ">
            <h1 className="text-5xl font-medium leading-tight">Don’t miss our daily amazing deals.</h1>
            <p className="text-gray-200 text-lg">Save up to 60% off on your first order</p>
            <Button variant='secondary' className="px-12 cursor-pointer" >Shop Now</Button>
          </div>


        </div>
        {/* Right Content */}


        {/* <img className="absolute top-0 right-0" src={ImageRight} alt="Hero Image" /> */}

      </Container>
    </div>
  )
}

export default Hero