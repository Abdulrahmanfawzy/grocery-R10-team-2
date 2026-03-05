import { Button } from "@/components/ui/button"
import { ChevronDown, Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-xl  bg-gray-200 w-full max-w-2xl overflow-hidden">
      {/* Dropdown */}
      <div className="hidden md:flex items-center gap-2 px-4 py-3 cursor-pointer">
        <span className="font-medium text-gray-700">All Categories</span>
        <ChevronDown size={14}/>
      </div>
      {/* divider */}
      <div className="hidden md:block h-6 w-px bg-gray-300"></div>
      {/* Input */}
      <input type="text"  placeholder="Search for items...." className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-500 "/>
      {/* Search Button */}
      <Button
      variant='primary'
      size='icon'
      className="rounded-none flex items-center justify-center size-12 cursor-pointer" >
        <Search  size={16}/>
      </Button>
      <div></div>
    </div>
  )
}

export default SearchBar