import BenefitsSection from "@/components/dashboard/Loyalty/BenefitsSection"
import CouponsSection from "@/components/dashboard/Loyalty/CouponsSection"
import MembershipTier from "@/components/dashboard/Loyalty/MembershipTier"
import PointsCard from "@/components/dashboard/Loyalty/PointsCard"
import ReferFriend from "@/components/dashboard/Loyalty/ReferFriend"

const Loyalty = () => {
  return (
    <div className='space-y-7 p-8'>
      <div>
        <h2 className="text-2xl font-semibold">
          Loyalty & Rewards
        </h2>

        <p className="text-sm text-gray-500">
          Track your points, rewards, and membership benefits
        </p>
      </div>
      {/* PointsCard */}
      <PointsCard />
      {/* MembershipTier */}
      <MembershipTier />
      {/* BenefitsSection */}
      <BenefitsSection />
      {/* CouponsSection */}
      <CouponsSection />
      {/* ReferFriend */}
      <ReferFriend />

    </div>
  )
}

export default Loyalty