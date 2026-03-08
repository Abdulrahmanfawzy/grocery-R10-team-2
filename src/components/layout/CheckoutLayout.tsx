import type { ReactNode } from "react"

type CheckoutLayoutProps = {
    children: ReactNode;
};

const CheckoutLayout = ({children} : CheckoutLayoutProps) => {
  return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}

export default CheckoutLayout
