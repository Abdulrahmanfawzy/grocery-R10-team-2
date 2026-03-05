import Container from "../common/Container"
import logo from "../../assets/Header/Logo.png"
import { Facebook, Instagram, Linkedin, Mail, Map } from "lucide-react"

type FooterColumn = {
  id: number;
  title: string;
  links: string[];
};


const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      id: 1,
      title: "Support",
      links: ["FAQ", "Contact Us", "Chat"],
    },
    {
      id: 2,
      title: "Services",
      links: ["Order tracking", "Smart List", "Sign up"],
    },
    {
      id: 3,
      title: "Terms and Policies",
      links: [
        "About Us",
        "Terms Of Use",
        "Privacy Policy",
        "Return Policy",
        "Cookies Policy",
      ],
    },
  ];
  return (
    <div className="bg-gray-200 mt-4">
      <Container>
        <div>
          {/* Main footer */}
          <div className="max-w-7xl mx-auto px-6 py-16  grid md:grid-cols-4 gap-4">
            {/* column 1 */}
            <div className="space-y-6 ">
              <img src={logo} alt="Logo" />
              {/* social media links */}
              <div className="flex gap-4">
                <Instagram />
                <Linkedin />
                <Facebook />
              </div>

              <p className="text-gray-600 text-sm">
                Grocery platform offering fresh produce, daily essentials,
                personalized recommendations, and seamless ordering with
                secure payments and real-time tracking.
              </p>

              {/* Map */}
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Map size={18} />
                <span>123 Main Street, City, Country</span>
              </div>
              {/*  Mail */}
              <div className=" flex items-center gap-3 text-sm text-gray-700">
                <Mail size={18} />
                <span>help@groceryplus.com</span>
              </div>

            </div>
            {/* columns */}
            {
              footerColumns.map((col) => (
                <div key={col.id}>
                  <h3 className="font-semibold mb-4">{col.title}</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {
                      col.links.map((link, index) => (
                        <li key={index}>{link}</li>

                      ))
                    }
                  </ul>
                </div>
              ))
            }

          </div>
        </div>
      </Container>
      {/* Bottom Footer */}
      <div className="bg-primary text-white text-center py-4 text-sm">
        <span>© 2025 GroceryPlus - Smart Grocery, Delivered Fast. All Rights Reserved.</span>
      </div>
    </div>
  )
}
export default Footer;
