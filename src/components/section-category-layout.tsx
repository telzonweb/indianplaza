import { motion } from "framer-motion";
// import IconBoxLayout2 from "@/components/icon-box-layout-2";
// import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
// import Message2LineIcon from "remixicon-react/Message2LineIcon";
// import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
// import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
// import Database2LineIcon from "remixicon-react/Database2LineIcon";
// import Key2LineIcon from "remixicon-react/Key2LineIcon";
// import IconCategory from "@/components/icon-category-details";

export const iconBoxes = [
  {
    src:"https://tse3.mm.bing.net/th?id=OIP.zUuS7Z7vcsYzutwcqM5J3AAAAA&pid=Api&P=0&h=180",
    title: "Everest Spices",
    description:
      "Everest Food Products Pvt Ltd (Everest Spices) is an Indian manufacturer, distributor and exporter of ground spices and spice mixtures under the brand name Everest.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    src:"https://tse2.mm.bing.net/th?id=OIP.bxMpKkyfj40uyheELfdihgHaEY&pid=Api&P=0&h=180",
    title: "Maggi",
    description:
      "Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
   src:"https://tse1.mm.bing.net/th?id=OIP.v6GhTR_13tZjkQAKGQXYUwHaFP&pid=Api&P=0&h=180",
    title: "Cadbury Dairy Milk",
    description:
      "Cadbury Dairy Milk is a brand of milk chocolate currently manufactured by Cadbury, except in the United States where it is made by Mondelēz International.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
//   {
    
//     title: "Advisers & Intermediaries",
//     description:
//       "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
//   },
//   {
    
//     title: "Social Media Marketing",
//     description:
//       "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
//   },
//   {
//     title: "Network Security",
//     description:
//       "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectioncategoryLayout = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12">
              Our Product{" "}
            </h2>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div> */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
  {iconBoxes.map((iconBox, index) => {
    return (
      <motion.div
        key={iconBox.title}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
        }}
        custom={index}
      >
        <div className={`bg-white rounded-lg p-8 ${iconBox.shadow}`}>
          <img src={iconBox.src} alt={iconBox.title} className="mx-auto mb-6" />
          <h3 className="text-lg font-semibold mb-4">{iconBox.title}</h3>
          <p className="text-gray-600">{iconBox.description}</p>
        </div>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default SectioncategoryLayout;
