import ArchivedLists from "@/components/dashboard/SmartList/ArchivedLists"
import Favorite from "@/components/dashboard/SmartList/Favotite/Favorite"
import SmartListCard from "@/components/dashboard/SmartList/SmartListCard"
import SmartListHeader from "@/components/dashboard/SmartList/SmartListHeader"
import { smartLists } from "@/lib/types/smartLists"

const SmartLists = () => {
  return (
    <div>
      <SmartListHeader />
      <div className="grid md:grid-cols-2 gap-2 mt-6">
      {
        smartLists.map((list)=>(
          <SmartListCard key={list.id} list={list} />
        ))

      }
      </div>
      <Favorite /> 
      <ArchivedLists />
    </div>
  )
}

export default SmartLists