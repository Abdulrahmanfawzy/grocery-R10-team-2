import { categoryProgress, insightCards } from "@/lib/data/dataDashboard";

const ShoppingInsights = () => {
  return (
    <div className="bg-gray-50 border rounded-xl p-6 mt-8">
      {/* Title */}
      <h2 className="text-2xl mb-6 text-primary font-bold">Your Shopping Insights</h2>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* card */}
        {
            insightCards.map((card)=>{
                const Icon = card.icon ;
                return (
        <div className="bg-primary text-white p-5 rounded-xl">
          <Icon />
          <p className="mt-2 text-sm">{card.title}</p>
          <h3 className="text-xl font-semibold">{card.value}</h3>
          <p className="text-xs opacity-80">{card.description}</p>
        </div>

                )
            })
        }


      </div>
        {/* Most Bought Categories */}
        <h3 className="text-sm  font-medium text-gray-500 mb-3">Most Bought Categories</h3>

        {/* Progress Items */}
        <div className="space-y-3 bg-gray-100 p-4 rounded-xl">
            {/* Progress Item */}
            {
                categoryProgress.map((prog)=> {
                    const Percent = prog.percent
                    return (
            <div className="flex items-center gap-4">
                {/* Progress */}
                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                    <div className={`bg-gradient-to-r  via-primary/80 to-primary h-2  rounded-full`} style={{width : `${Percent}%`}}></div>
                </div>
                <span className="text-sm text-primary w-40">{prog.name} ({prog.percent}%)</span>
            </div>)
})
            }
        </div>
    </div>
  );
};

export default ShoppingInsights;
