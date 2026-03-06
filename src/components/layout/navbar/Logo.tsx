import image from "../../../assets/Header/Logo.png";
const Logo = () => {
  const logoSrc: string = image;
  return (
     <>
    <img src={logoSrc} alt="Logo" />
    </>
  )
}

export default Logo