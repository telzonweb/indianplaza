import { motion } from "framer-motion";

export const iconBoxes = [
  {
    src:"https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?t=st=1716269509~exp=1716273109~hmac=64ee2e0c76a720f10b2d553814e286974b9f1fe316819cd65e6809a128ca44be&w=996",
    title: "Fresh Produce",
    description:
      "Handpicked fruits and vegetables delivered daily to guarantee peak freshness and flavor.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#00FF00]",
  },
  {
    src:"https://img.freepik.com/premium-photo/homemade-oatmeal-cookies-with-nuts-raisins-glass-milk-dark-wooden-background_132024-258.jpg?w=996",
    title: "Dairy & Bakery",
    description:
      "Freshly baked bread, pastries, and a variety of dairy products, including organic and lactose-free choices.",
    shadow: "shadow-[0_1px_6px_rgba(255,165,0,.15),0_5px_0_0_#ffef00]",
  },
  {
    src:"https://img.freepik.com/premium-photo/healthy-vegan-ingredients-cooking-various-clean-vegetables-herbs-marble-background-products-from-market-without-plastic-flat-lay_86156-69.jpg?w=996",
    title: "Health & Wellness",
    description:
      "Organic, gluten-free, and vegan products to support your healthy lifestyle.",
    shadow: "shadow-[0_1px_6px_rgba(255,182,193,.15),0_5px_0_0_#4C86E7]",
  },
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

const AboutOffer = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12">We Are Offer</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 mr-10 ml-10">
          {iconBoxes.map((iconBox, index) => (
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
              <div className={`bg-white rounded-lg p-10 ${iconBox.shadow} hover:shadow-md hover:scale-105 transition-shadow duration-300`} style={{ height: "400px" }}>
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <img src={iconBox.src} alt={iconBox.title} className="mb-4 h-21 w-30 object-cover" />
                  <h3 className="text-lg font-semibold mb-4">{iconBox.title}</h3> 
                  <p className="text-gray-600">{iconBox.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOffer;