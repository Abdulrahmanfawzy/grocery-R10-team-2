import { Button } from "@/components/ui/button";

type Props = {
    name: string;
    icon?: string;
};

const CategoryItem = ({ name, icon }: Props) => {
    return (
        <li>
            <Button
                variant="ghost"
                className="font-normal justify-start w-full cursor-pointer"
            >
                {icon && (
                    <img src={icon} className="w-5 h-5" alt={name} />
                )}
                <span className="px-2">{name}</span>
            </Button>
        </li>
    );
};

export default CategoryItem;