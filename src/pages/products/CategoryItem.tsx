import { Button } from "@/components/ui/button";

type Props = {
    name: string;
    icon?: string;
    active: boolean;
    onClick: () => void;
};

const CategoryItem = ({ name, icon, onClick, active }: Props) => {
    return (
        <li>
            <Button
                onClick={onClick}
                variant="ghost"
                className={`font-normal justify-start w-full cursor-pointer hover:!bg-blue-100
                    ${active ? "bg-blue-100 font-bold shadow-sm" : "hover:bg-white/60 text-gray-700"}
                `}
            >
                {icon && (
                    <img src={icon} className="w-5 h-5" alt={name} />
                )}
                <span className="px-2 hidden sm:inline">{name}</span>
            </Button>
        </li>
    );
};

export default CategoryItem;