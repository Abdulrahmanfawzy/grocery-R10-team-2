import NavActions from "./NavActions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Container from "@/components/common/Container";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 bg-white  z-50 shadow-sm py-2  ">
  <Container>
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 ">
      {/* {Left section} */}
      <Logo />
      {/* {Middle section} */}
      <NavLinks />
      <div className="hidden md:flex">
      <SearchBar />
      </div>
      {/* {Right section} */}
      <NavActions />
    </div>
    <div className="flex md:hidden mt-2">
    <SearchBar />
    </div>
  </Container>
    </div>
)};

export default Navbar;
