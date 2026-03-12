import { Button } from "@/components/ui/button";
import { useGetCart } from "@/hooks/useGetCart";
import { useAppSelector } from "@/store/hook";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavActions = () => {
  const { data  } = useGetCart();
  const itemCount = data?.data?.items?.length ?? 0;
  const user = useAppSelector((state) => state.login.currentUser);
  return (
    <div className="flex items-center gap-4 shrink-0">
      {/* cart */}
      <Link to="cart">
        <div className="flex relative items-center gap-2 cursor-pointer">
          <ShoppingCart className="text-gray-400" size={24} />
          {/* counter cart */}

          {itemCount > 0 && (
            <span className="absolute -top-2 left-3 bg-gray-300 text-xs w-5 h-5  rounded-full  flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="text-gray-700 font-medium hidden md:block">
            My Cart
          </span>
        </div>
      </Link>

      {/* Sign Up Button */}
      {user ? (
        <Link to={"/profile"}>
          <Button variant="default" className="cursor-pointer">
            {user.username} profile
          </Button>
        </Link>
      ) : (
        <Link to={"/Register"}>
          <Button variant="default" className="cursor-pointer">
            Sign Up
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavActions;

