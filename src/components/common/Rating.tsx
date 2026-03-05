import { Star } from "lucide-react"

export type Rating = {
  rating: number
  max?: number
}
const Rating = ({rating , max= 5} :Rating) => {
  return (
    <div className="flex items-center gap-1">
        {Array.from({length: max}).map((_,index)=>{
            const difference = rating - index ;
            if(difference >= 1){
               return <Star key={index} className="fill-yellow-400 text-yellow-400 w-4 h-4" />
            }

            if(difference > 0) {
                return (
                    <div key={index} className="relative">
                        <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0 overflow-hidden" 
                        style={{width : `${difference * 10 }%`}}
                        />

                    </div>
                )
            }
            return <Star key={index} className="w-4 h-4 text-gray-300" />
        })}
    </div>
  )
}

export default Rating