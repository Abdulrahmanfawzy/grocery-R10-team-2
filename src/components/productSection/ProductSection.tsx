import { useState } from "react";
import Container from "../common/Container";
import ProductCard from "../common/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { Category, Product } from "@/lib/types/typesProducts";
import ProductCardSkeleton from "../common/ProductCardSkeleton";

type Props = {
  products?: Product[];
  titleheading?: string;
  categories?: Category[];
  isPending: boolean;
};

const ProductSection = ({
  titleheading,
  categories,
  products = [],
  isPending,
}: Props) => {
  const [filterCategory, setFilterCategory] = useState<number | null>(null);
  const SelectedProducts = filterCategory
    ? products.filter((produte) => produte.category.id === filterCategory)
    : products;

  if (isPending) {
    return <ProductCardSkeleton />;
  }
  return (
    <Container>
      <div className="space-y-6 mt-18">
        {/* Title Section */}
        <h2 className="text-4xl font-bold">{titleheading}</h2>

        {/* Category Filters */}

        <div className="flex flex-col justify-between items-start md:flex-row md:justify-end   md:items-center gap-4">
          <h1
            className={`cursor-pointer  font-bold ${filterCategory === null ? " text-blue-500" : "text-primary "}`}
            onClick={() => setFilterCategory(null)}
          >
            All
          </h1>
          {categories?.map((cate) => (
            <span
              onClick={() => setFilterCategory(cate.id)}
              key={cate.id}
              className={`cursor-pointer  font-bold   ${filterCategory === cate.id ? " text-blue-500" : "text-primary  "}`}
            >
              {cate.name}
            </span>
          ))}
        </div>

        {SelectedProducts.length ? (
          filterCategory === null ? (
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {SelectedProducts?.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-4 md:basis-1/3 lg:basis-1/5"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          ) : (
            <div className="flex flex-wrap gap-4">
              {SelectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="flex justify-center items-center py-20">
            <h1 className="font-medium text-red-500">
              No Products Found In This Category
            </h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductSection;
