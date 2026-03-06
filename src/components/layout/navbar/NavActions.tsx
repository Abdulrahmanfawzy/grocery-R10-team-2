import { Button } from "@/components/ui/button";
import { LogIn, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavActions = () => {
  const [login, setLogin] = useState<boolean>(false);
  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="flex items-center gap-4">
      {/* cart */}
      <Link to="cart">
        <div className="flex relative items-center gap-2 cursor-pointer">
          <ShoppingCart className="text-gray-400" size={24} />
          {/* counter cart */}
          <span className="absolute -top-2 left-3 bg-gray-300 text-xs w-5 h-5  rounded-full  flex items-center justify-center">
            3
          </span>
          <span className="text-gray-700 font-medium hidden md:block">
            My Cart
          </span>
        </div>
      </Link>

      {/* Sign Up Button */}
      <Button
        onClick={toggleLogin}
        variant="default"
        className="cursor-pointer  "
      >
        {login ? (
          <>
            <User size={18} />{" "}
            <span className="hidden md:block">
              <Link to={"profile"}>ibrahim</Link>
            </span>
          </>
        ) : (
          <>
            <LogIn size={18} />
            <Link to={"/login"}>
              <span className="hidden md:block">Sign In</span>
            </Link>
          </>
        )}
      </Button>
    </div>
  );
};

export default NavActions;
