
const MobileMenuButton = ({ openMenu, setOpenMenu }: { openMenu: boolean, setOpenMenu: (val: boolean) => void }) => {
    return (
        <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden cursor-pointer flex flex-col justify-between w-6 h-5 relative focus:outline-none"
        >
            {/* Line 1 */}
            <span
                className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out
          ${openMenu ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            {/* Line 2 */}
            <span
                className={`block h-0.5 w-full bg-black transition-opacity duration-300 ease-in-out
          ${openMenu ? "opacity-0" : "opacity-100"}`}
            ></span>
            {/* Line 3 */}
            <span
                className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out
          ${openMenu ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
        </button>
    );
};

export default MobileMenuButton;