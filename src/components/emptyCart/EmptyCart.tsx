import { Link } from "react-router-dom";
import { Button } from "../ui/button";


export default function EmptyCart() {
  return (
    <div className="py-20 px-5 mx-auto flex justify-center items-center flex-col">
<h3>You Cart Is Empty || You can contniue Shopping</h3>
<Link to={"/"} className="my-6">
 <Button className="font-sm cursor-pointer">Continue Shopping</Button>      
</Link>
    </div>
  )
}
