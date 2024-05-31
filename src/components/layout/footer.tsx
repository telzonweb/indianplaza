import { Link } from "react-router-dom";
import SiteLogo from "./site-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  // faXTwitter,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";

// import { footerNav } from "@/config/site";

const Footer = () => {
  return (
    <footer className=" bg-[#ffd9a191]">
      <div className="container mx-auto px-4">
        <div className="pb-16 pt-28">
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-6">
              <Link to="/" className="shrink-0">
                <img src="/ipLogoWide.png" alt="ipLogo" className="w-[160px]" />
              </Link>
              <p className="mb-8 mt-6 font-worksans text-lg text-black">
                Where Tradition Meets Service
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/iPlazaSA/"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#324e8c] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} width={15} />
                </a>
                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#cd201f] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} width={15} />
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h2 className="text-#4b5320 mb-4 font-caveat text-3xl">
                Our Outlet
              </h2>
              <ul className="space-y-4 text-sm text-black">
                <li>
                  <span className="block leading-6">
                    1/161 Glynburn Rd, FIRLE, SA 5070
                  </span>
                </li>
                
                <li>
                  <span className="block leading-6">
                    Indian Traders 345 Anzac Hwy, PLYMPTON, SA 5038
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h2 className="text-#202A44 mb-4 font-caveat text-3xl">
                Contact
              </h2>
              <ul className="space-y-3 text-sm text-black">
                <li>
                  <span>Phone: </span>
                  <a href="tel:+61-08-8260-5671" className="hover:text-primary">
                    +61 08 8260 5671
                  </a>
                </li>
                <li>
                  <span>Email: </span>
                  <a
                    href="mailto:hello@indianplaza.com.au"
                    className="hover:text-primary"
                  >
                    hello@indianplaza.com.au
                  </a>
                </li>
                <li>
                  <address className="-mt-px leading-6">
                    431-435 Main North Rd ENFIELD, SA 5085
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-12">
        <div className="container text-center">
          <span className="text-sm text-black">
            © {new Date().getFullYear()} Indian Plaza, Made by{" "}
            <a href="https://telzonmarketing.in" className="hover:text-primary">
              Telzon Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
