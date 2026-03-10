import { Button } from "@/components/ui/button"
import { CpuIcon, PoundSterling } from "lucide-react"

const PointsCard = () => {
  return (
    <div className="bg-primary text-white rounded-xl p-6 flex justify-between items-center">

      <div>
        <p className="text-sm opacity-80">
          Your Points Balance
        </p>

        <h2 className="text-3xl font-bold">
          2,450
        </h2>

        <span className="text-sm opacity-70 block">
          ≈ £24.50 in rewards
        </span>

        <Button variant={'secondary'} className="mt-4 cursor-pointer">
          Redeem Points
        </Button>
      </div>

      <PoundSterling size={28}  className="text-primary bg-white rounded-full p-1"/>

    </div>
  )
}

export default PointsCard