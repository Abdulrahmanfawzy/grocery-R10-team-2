export const CheckboxItem = ({
    label,
    checked,
    onChange
}: {
    label: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <label
            onClick={onChange}
            className="flex items-center gap-2 cursor-pointer group mb-2 last:mb-0"
        >
            <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all flex-shrink-0
                ${checked
                        ? "bg-sky-600 border-sky-600"
                        : "border-gray-300 group-hover:border-sky-400"
                    }`}
            >
                {checked && (
                    <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>

            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                {label}
            </span>
        </label>
    );
};