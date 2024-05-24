import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
// import SectionGoogleMap from "@/components/sections/section-google-map";
// import SectionContactForm from "@/components/sections/section-contact-form";
import { Helmet } from "react-helmet";
import ContactUs from "@/components/Contactus";
import AddressComponent from "@/components/AddressComponent";

const Contact = useFramerTransition(
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle>Contact</SectionPageTitle>
      {/* <ContactUs/> */}
      <AddressComponent />
      {/* <SectionContactForm />
      <SectionGoogleMap /> */}
    </main>
  </>,
);

export default Contact;
