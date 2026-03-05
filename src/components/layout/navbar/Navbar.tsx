import Container from "../../common/shared/Container";
import NavActions from "./NavActions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 bg-white  z-50 shadow-sm py-2 md:p-0 ">
  <Container>
    <div className="flex items-center justify-between bg-white py-6 ">
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
