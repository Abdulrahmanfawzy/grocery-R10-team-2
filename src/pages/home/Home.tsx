import FeaturesSection from "@/components/featuresSection/FeaturesSection";
import Hero from "@/components/hero/Hero";
import ProductSection from "@/components/productSection/ProductSection";

import PromomSection from "@/components/promomSection/PromomSection";
import { useGetHotMeals } from "@/hooks/useGetHotMealsHome";
import { useGetCategoriesMeals } from "@/hooks/useGetCategoriesHome";

const Home = () => {
  const { data: TodayMeals, isPending: isTodayPending } = useGetHotMeals(
    "Mealstoday",
    "meals/today",
  );
  const { data: bestsells, isPending: isBestPending } = useGetHotMeals(
    "best-sells",
    "best-sells",
  );
  const { data: newproducts, isPending: isNewPending } = useGetHotMeals(
    "new-products",
    "new-products",
  );
  const { data: CategoryResponse } = useGetCategoriesMeals();
  const categories = CategoryResponse?.data;

  return (
    <>
      <Hero />
      <ProductSection
        titleheading="Hot Deals"
        products={TodayMeals?.data}
        categories={categories}
        isPending={isTodayPending}
      />
      <ProductSection
        titleheading="New Product"
        products={newproducts?.data}
        categories={categories}
        isPending={isBestPending}
      />
      <PromomSection />
      <ProductSection
        titleheading="Daily Best Sells"
        products={bestsells?.data}
        categories={categories}
        isPending={isNewPending}
      />
      <FeaturesSection />
    </>
  );
};

export default Home;
