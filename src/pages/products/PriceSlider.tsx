
const PriceSlider = ({ min, max, value, onChange }: { min: number; max: number; value: [number, number]; onChange: (v: [number, number]) => void }) => {
    const percent = (v: number) => ((v - min) / (max - min)) * 100;
    return (
        <div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Your range:</span>
                <span className="font-semibold text-gray-700">£{value[0]} - £{value[1]}</span>
            </div>
            <div className="relative h-1.5 bg-gray-200 rounded-full mt-3 mb-1">
                <div className="absolute h-full bg-sky-500 rounded-full" style={{ left: `${percent(value[0])}%`, right: `${100 - percent(value[1])}%` }} />
                <input type="range" min={min} max={max} value={value[0]} onChange={(e) => onChange([+e.target.value, value[1]])}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                <input type="range" min={min} max={max} value={value[1]} onChange={(e) => onChange([value[0], +e.target.value])}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                {/* Thumbs */}
                <div className="absolute w-4 h-4 bg-white border-2 border-sky-500 rounded-full -top-1.5 -translate-x-1/2 shadow-sm pointer-events-none" style={{ left: `${percent(value[0])}%` }} />
                <div className="absolute w-4 h-4 bg-white border-2 border-sky-500 rounded-full -top-1.5 -translate-x-1/2 shadow-sm pointer-events-none" style={{ left: `${percent(value[1])}%` }} />
            </div>
        </div>
    )
}

export default PriceSlider