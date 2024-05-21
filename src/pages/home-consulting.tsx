import useFramerTransition from "@/hooks/use-transition";
import SectionHeroLayout3 from "@/components/sections/section-hero-layout-3";
import SectionPartnersLayout2 from "@/components/sections/section-partners-layout-2";
// import SectionBenefits from "@/components/sections/section-benefits";
import SectionIconBoxesLayout2 from "@/components/sections/section-icon-boxes-layout-2";
import SectionTestimonialsSliderLayout2 from "@/components/sections/section-testimonials-slider-layout-2";
import SectionFAQ from "@/components/sections/section-faq";
import SectionCTALayout3 from "@/components/sections/section-cta-layout-3";
import { Helmet } from "react-helmet";
import { SwiperElement } from "@/components/extra/SwiperElement";
// import Sectionourstore from "@/components/sections/section-our-store";
import SectioncategoryLayout from "@/components/section-category-layout";
import AddressComponent from "@/components/AddressComponent";
import SectionImgPara from "@/components/sections/section-imgpara";

const HomeConsulting = useFramerTransition(
  <>
    <Helmet>
      <title>Indian Plaza : Top Grocery Store in Melbourne</title>
    </Helmet>
    <main className="relative">
      <SectionHeroLayout3 />
      <SectionImgPara/>
      {/* <Sectionourstore /> */}
      {/* <SectionBenefits /> */}
      {/* <SectionIconBoxesLayout2 /> */}
      <SectioncategoryLayout />
      <SectionPartnersLayout2 />
      <SectionTestimonialsSliderLayout2 />
      <SectionFAQ />
      <SectionCTALayout3 />
      <AddressComponent/>
    </main>
  </>,
);

export default HomeConsulting;
