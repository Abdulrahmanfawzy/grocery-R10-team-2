import { Button } from "@/components/ui/button"

const ArchivedLists = () => {
  return (
    <div className="border rounded-lg p-6 mt-6">
        <h3 className="font-semibold mb-2">Archived Lists</h3>
        <p className="text-sm text-gray-500 mb-4">View and restore your archived shopping lists</p>
        <Button variant={'link'} className="cursor-pointer">View Archived Lists (3)</Button>
    </div>
  )
}

export default ArchivedLists