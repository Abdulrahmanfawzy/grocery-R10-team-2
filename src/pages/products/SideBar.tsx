import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import CategoryItem from "./CategoryItem";
import { categories } from "@/lib/constants/products";

const Sidebar = () => {
    return (
        <aside className="md:w-64 shrink-0 ">
            <Card className="sticky top-24 bg-light-blue">

                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-lg">
                        Categories
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <ul className="space-y-1">
                        {categories.map((category, index) => (
                            <CategoryItem
                                key={index}
                                name={category.name}
                                icon={category.icon}
                            />
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </aside>
    );
};

export default Sidebar;