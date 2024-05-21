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
    <footer>
      <div className="container">
        <div className="pb-16 pt-28">
          <div className="gap-10 space-y-10 md:grid md:grid-cols-12 md:space-y-0">
            <div className="col-span-6">
              <Link to="/" className="shrink-0">
                {/* <SiteLogo
                  width={123}
                  height={39}
                  lightClasses="dark:hidden"
                  darkClasses="hidden dark:block"
                /> */}
                <img src="/ipLogoWide.png" alt="ipLogo" className="w-[160px]" />
              </Link>
              <p className="mb-8 mt-6">
                Tools to Effectively Build Your Brand and Grow Your Business.
              </p>
              <div className="flex space-x-2">
                {/* <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faXTwitter} width={15} />
                </a> */}

                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#0a0303] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} width={15} />
                </a>
                <a
                  href="https://www.facebook.com/iPlazaSA/"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#324e8c] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} width={15} />
                </a>
                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#cd201f] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} width={15} />
                </a>
              </div>
            </div>

            <div className="col-span-6 xl:col-span-3">
              <h2 className="mb-4 text-lg">Contact</h2>
              <ul className="space-y-3 text-md">
                {/* <li>
                  <address className="-mt-px leading-6">
                    8910 University Center Lane Suite 620 San Diego, CA 92102
                  </address>
                </li> */}
                <li>
                  <span>Phone: </span>
                  <a
                    href="tel:+1-800-1554-456-123"
                    className="hover:text-primary"
                  >
                    + 61 08 8260 5671
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
          <span className="text-xs">
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
