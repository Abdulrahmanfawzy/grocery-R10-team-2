import { CreditCard, LayoutDashboard, MapPin, Package, Settings, Shield, User, type LucideIcon } from 'lucide-react';
import ImageUser from "../../../assets/Web/Hi-Fi/user.jpg" ;
import { NavLink } from 'react-router-dom';
type LinksProps = {
    name : string ;
    icon : LucideIcon;
    path :string
}
const Sidebar = () => {

  const links : LinksProps[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/profile"
    },
    {
      name: "Personal Info",
      icon: User,
      path: "/profile/personal-info"
    },
    {
      name: "Payment & Wallet",
      icon: CreditCard,
      path: "/profile/payment"
    },
    {
      name: "Order History",
      icon: Package,
      path: "/profile/orders"
    },
    {
      name: "Address",
      icon: MapPin,
      path: "/profile/address"
    },
    {
      name: "Security & Login",
      icon: Shield,
      path: "/profile/security"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/profile/settings"
    }
  ]
  return (
    <div className='bg-gray-100 p-4 rounded-xl border'>
        {/* UserInfo */}
        <div className='flex items-center gap-3 pb-4 border-b pt-4'>
            <img src={ImageUser} alt="" className='w-12 h-12 rounded-full' />
            <div>
                <p className='font-medium'>ibrahim</p>
                <span className='text-sm text-primary'>Gold Member</span>
            </div>
        </div>

        {/* Links */}
        <div className='mt-4 flex flex-col gap-1'>
            {
                links.map((link)=>{
                    const Icon = link.icon;
                    return (
                        <NavLink key={link.name} to={link.path} end={link.path === '/profile'}
                        className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-4 rounded-lg text-sm transition
                ${isActive
                  ? "bg-primary text-white duration-300 transition "
                  : "text-gray-600 hover:bg-gray-100 duration-300 transition"}`
              }
                        >

                            <Icon size={18} /> {link.name}
                        </NavLink> 
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar