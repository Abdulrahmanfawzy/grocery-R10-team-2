export function calculateDiscount(price:number,priceAfterDiscount:number){
const result:number = ((price-priceAfterDiscount) / price) * 100 
return result.toFixed(0)
}



