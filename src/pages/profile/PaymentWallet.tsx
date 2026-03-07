import History from "@/components/dashboard/paymentWallet/History"
import PaymentMethods from "@/components/dashboard/paymentWallet/PaymentMethods"
import Wallet from "@/components/dashboard/paymentWallet/Wallet"

const PaymentWallet = () => {
  return (
    <div>
      <Wallet />
      <PaymentMethods />
      <History />
    </div>
  )
}

export default PaymentWallet