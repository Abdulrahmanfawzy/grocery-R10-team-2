import image from "../../../assets/Web/Hi-Fi/Header/Logo.png";
const Logo = () => {
  const logoSrc : string = image;
  return (
    <>
    <img src={logoSrc} alt="Logo" />
    </>
  )
}

export default Logo