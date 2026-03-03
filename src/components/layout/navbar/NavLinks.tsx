import { Home, LayoutGrid, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type NavLinksProps = {
  id : number ;
  labla : string ;
  href : string ;
  icon : LucideIcon ;
}

const navLinks : NavLinksProps[] = [
    { id: 1, labla: "Home", href: "/home", icon: Home },
      { id: 2, labla: "Categories", href: "/categories", icon: LayoutGrid },

]
const NavLinks = () => {
  return (
    <div className="flex  items-center space-x-4">
      {
        navLinks.map((link)=> {
          const Icon = link.icon ;
          return (
            <Link className="flex items-center text-(--black) font-medium text-base" key={link.id} to={link.labla} >
              <Icon className="mr-1" size={24} />
              {link.labla}</Link>
          )
        })
      }
    </div>
  )
}

export default NavLinks