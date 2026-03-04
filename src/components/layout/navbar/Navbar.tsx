import Container from "../../common/shared/Container";
import Login from "./Login";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
  <Container>
    <div className="flex items-center justify-between h-16 ">
      {/* {Left section} */}
      <Logo />
      {/* {Middle section} */}
      <NavLinks />
      <SearchBar />
      {/* {Right section} */}
      <Login />
    </div>
  </Container>
)};

export default Navbar;
