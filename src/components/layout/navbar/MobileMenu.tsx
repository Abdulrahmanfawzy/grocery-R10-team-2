import { LogOut } from "lucide-react";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
    openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
};

const MobileMenu = ({ openMenu, setOpenMenu }: MobileMenuProps) => {
    return (
        <div
            className={`absolute top-16 left-0 w-full bg-white shadow-md 
            transition-all duration-300 overflow-hidden
            ${openMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
        >
            <div className="container py-4 flex flex-col gap-4">
                <NavLinks onClick={() => setOpenMenu(false)} />
                <button
                    className="md:hidden  cursor-pointer flex items-center gap-3"
                >
                    <LogOut size={22} /> Logout
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;