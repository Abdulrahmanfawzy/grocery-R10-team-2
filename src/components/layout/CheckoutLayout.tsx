import type { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./navbar/Navbar"

type CheckoutLayoutProps = {
    children: ReactNode;
};

const CheckoutLayout = ({children} : CheckoutLayoutProps) => {
  return (
    <>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default CheckoutLayout
