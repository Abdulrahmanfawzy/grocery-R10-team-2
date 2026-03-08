import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ProductCartEslam from "./ProductCartEslam";

type carouselProps={
  heading:string
}
export default function CarouselData({heading}:carouselProps) {

  return <>
<div className="w-[80%] mx-auto mt-12">
    <h3 className="text-2xl my-5">{heading} </h3>
           <Carousel className="w-full mt-4 ">
        <CarouselContent className="">
                  <CarouselItem className=" basis-full sm:basis-1/2 lg:basis-1/3">
            <ProductCartEslam />
          </CarouselItem>
          <CarouselItem className=" basis-full sm:basis-1/2 lg:basis-1/3">
             <ProductCartEslam />
          </CarouselItem>
          <CarouselItem className=" basis-full sm:basis-1/2 lg:basis-1/3">
            <ProductCartEslam />
          </CarouselItem>
          <CarouselItem className=" basis-full sm:basis-1/2 lg:basis-1/3">
            <ProductCartEslam />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  </div>
  </>
}
