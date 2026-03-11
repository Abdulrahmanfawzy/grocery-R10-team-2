import { Button } from "@/components/ui/button";
import { useState } from "react";
// import ProductNaturalFats from "./ProductNaturalFats";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReveiw";
import { useParams } from "react-router-dom";
import { useProductDetails } from "@/lib/api/productDetails";
import Loading from "@/components/common/Loading";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function productTabs() {
  const [tab, setTab] = useState<string>("description");
  const {id} = useParams()
  const {isError,isLoading,error} =  useProductDetails(id!)

  if (isLoading) {
    return<Loading></Loading>
  }
  if (isError) {
    return <ErrorMessage message={error.message}></ErrorMessage>
  }
  function changeTab(tab: string) {
    switch (tab) {
      // case "NaturalFats":
      //   return <ProductNaturalFats></ProductNaturalFats>;
      case "description":
        return <ProductDescription></ProductDescription>;
      case "review":
        return <ProductReview></ProductReview>;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-1 py-2">
        <Button
          className={`cursor-pointer ${tab == "description" ? "bg-primary" : "bg-gray-200 text-primary hover:text-white"}`}
          onClick={() => {
            setTab("description");
          }}
        >
          Description
        </Button>
        <Button
          className={`cursor-pointer ${tab == "review" ? "bg-primary" : "bg-gray-200 text-primary hover:text-white"}`}
          onClick={() => {
            setTab("review");
          }}
        >
          Reveiw
        </Button>
        {/* <Button
          className={`cursor-pointer ${tab == "NaturalFats" ? "bg-primary" : "bg-gray-200 text-primary hover:text-white"}`}
          onClick={() => {
            setTab("NaturalFats");
          }}
        >
          Natural Fats
        </Button> */}
      </div>
      <div className="">{changeTab(tab)}</div>
    </>
  );
}
