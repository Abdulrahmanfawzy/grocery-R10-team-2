import { Package, PoundSterling, Star, type LucideIcon } from "lucide-react"
type Cardprops = {
    id:number;
    title:string ;
    value:string ;
    icon : LucideIcon
}
const DashboardWelcome = () => {
    const Cards: Cardprops [] = [
  {
    id:455,
    title: "Track Orders",
    value: "3 Active",
    icon: Package,
  },
  {
    id:456,
    title: "Loyalty Points",
    value: "2,450 pts",
    icon: Star,
  },
  {
    id:457,
    title: "Store Credit",
    value: "£12.50",
    icon: PoundSterling,
  },
];
  return (
    <div className="bg-primary text-white rounded-xl p-8">
        {/* title */}
        <h2 className="text-2xl font-semibold">Welcome back, Ibrahim! </h2>
        <p className="text-gray-200 mt-1">Here's what's happening with your grocery shopping</p>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* card */}
            {
                Cards.map((card)=> {
                    const Icon = card.icon ;
                    return(
            <div className="bg-white  text-gray-700 p-5 shadow-md shadow-white rounded-xl space-y-2 ">
                <Icon size={28} className="text-primary" />
                <div className="space-y-1">
                    <p className="text-sm">{card.title}</p>
                    <p className="font-semibold text-lg">{card.value}</p>
                </div>
            </div>)
})
            }
        </div>

    </div>
  )
}

export default DashboardWelcome