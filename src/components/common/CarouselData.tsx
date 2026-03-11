import { useProducts } from "@/lib/api/productDetails";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCartEslam from "./ProductCartEslam";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

type carouselProps = {
  heading: string;
};
export default function CarouselData({ heading }: carouselProps) {
  const { data, isLoading, isError,error } = useProducts();
  if (isLoading) {
    return <Loading></Loading>
  }
  if (isError) {
    return <ErrorMessage message={error.message}></ErrorMessage>
  }
  return (
    <>
      <div className="w-[80%] mx-auto mt-12">
        <h3 className="text-2xl my-5">{heading} </h3>
        <Carousel className="w-full mt-4 ">
          <CarouselContent className="">
            {data?.map((product) => {
              return (
                <CarouselItem
                  className=" basis-full sm:basis-1/2 lg:basis-1/3"
                  key={product.id}
                >
                  <Link to={"/product-details/" + product.id}>
                    <ProductCartEslam product={product} />
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
