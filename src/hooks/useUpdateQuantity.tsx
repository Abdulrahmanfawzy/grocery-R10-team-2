import { useState } from "react"

export function useQuantity(){
     const[quantity,setQuantity] = useState(1)
    
    
    
    return{quantity,setQuantity}

 }