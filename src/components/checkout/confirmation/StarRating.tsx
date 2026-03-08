import { Star } from "lucide-react";

function StarRating({
  rating = 4,
  total = 5,
  fill = false,
}: {
  rating?: number;
  total?: number;
  fill?: boolean;
}) {
  return (
    <div className="flex items-center gap-0.5 cursor-pointer">
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? `text-yellow-400 ${fill ? "fill-yellow-400" : ""}`
              : "text-black"
          }`}
        />
      ))}
    </div>
  );
}
export default StarRating