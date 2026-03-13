import { Home, LayoutDashboard, LogOut, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type NavLinksProps = {
  id: number;
  labla: string;
  href: string;
  icon: LucideIcon;
}

const navLinks: NavLinksProps[] = [
  { id: 1, labla: "Home", href: "/", icon: Home },
  { id: 2, labla: "Categories", href: "/products", icon: LayoutDashboard },

]

type NavLinksComponentProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksComponentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
      {
        navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <>
              <Link className="flex items-center text-(--black) font-medium text-base"
                key={link.id}
                to={link.href}
                onClick={onClick}
              >
                <Icon className="mr-1" size={24} />
                <span>{link.labla}</span>
              </Link>


            </>
          )
        })
      }
    </div>
  )
}

export default NavLinks