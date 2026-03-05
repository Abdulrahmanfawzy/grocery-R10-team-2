// src/pages/products/SideBar.tsx
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import CategoryItem from "./CategoryItem";
import { categories } from "@/lib/constants/products";

type Props = {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
};

const Sidebar = ({ onSelectCategory, selectedCategory }: Props) => {
    return (
        <aside className="">
            <Card className="sticky top-24 bg-light-blue shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0" >
                    <CardTitle className="text-lg">
                        Categories
                    </CardTitle>
                </CardHeader >

                <CardContent>
                    <ul className="space-y-1">
                        {categories.map((category, index) => (
                            <CategoryItem
                                key={index}
                                name={category.name}
                                icon={category.icon}
                                active={selectedCategory === category.name}
                                onClick={() => onSelectCategory(category.name)}
                            />
                        ))}
                    </ul>
                </CardContent>
            </Card >
        </aside >
    );
};

export default Sidebar;