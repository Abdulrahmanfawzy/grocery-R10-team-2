import { Input } from "@/components/ui/input";

function Notes() {
  return (
    <div className="my-14">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Special Notes
      </h2>

      <div className="border border-gray-200 rounded-xl p-6">
        <div className="flex gap-6 items-center">
          <Input
            type="text"
            placeholder="Leave order infront of the door"
            className="py-2"
          />
          <Input type="text" placeholder="Don’t Ring Bell" className="py-2" />
          <Input
            type="text"
            placeholder="Call 30 min in Advance"
            className="py-2"
          />
        </div>

        <Input type="text" placeholder="Input Text..." className="py-2 mt-6" />
      </div>
    </div>
  );
}

export default Notes;
