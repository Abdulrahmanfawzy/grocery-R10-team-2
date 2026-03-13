import NavActions from "./NavActions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useCart } from "@/lib/api/cart";
import { LogOut, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="sticky top-0 left-0 bg-white flex items-center z-50 shadow-sm py-2 h-16 ">
      <div className="container">
        <div className="flex  items-center justify-between gap-3 ">
          <Logo />

          {/* desktop links */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* mobile menu button */}
          <SearchBar />
          <div className="flex items-center gap-4 ">
            <NavActions />

            {/* Logout */}

            <MobileMenuButton
              openMenu={openMenu} setOpenMenu={setOpenMenu}
            />
            <button
              className="hidden md:inline p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <LogOut size={22} />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
};

export default Navbar;
