import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    title: "What types of products do you sell? ",
    content:
      "We offer a wide range of Indian groceries including spices, pickles, pulses, rice, flours, snacks, and fresh produce.",
  },
  {
    title: "Do you carry fresh produce? ",
    content:
      "Yes, we stock a variety of fresh vegetables and fruits, including popular Indian produce items.",
  },
  {
    title: "Can I find organic products at your store? ",
    content:
      "Yes, we have a selection of organic spices, pulses, rice, and other organic grocery items.",
  },
  {
    title: "Do you offer home delivery? ",
    content:
      "Currently, we do not offer home delivery. Please visit our store for all your grocery needs.",
  },
  {
    title: "Are there any special deals or discounts available? ",
    content:
      "We regularly offer discounts and special promotions. Check our website or sign up for our newsletter to stay updated on the latest deals. ",
  },
];

const SectionFAQ = () => {
  return (
    <section className="relative overflow-hidden py-24 dark:bg-slate-900 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="lg:w-[45%] lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2>Frequently Asked Questions</h2>
              <Accordion
                type="multiple"
                defaultValue={[accordionItems[0].title]}
                className="w-full"
              >
                {accordionItems?.map((item, index) => (
                  <AccordionItem key={index} value={item.title}>
                    <AccordionTrigger className="text-md">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <span className="mt-14 inline-block text-lg">
                Any Question?{" "}
                <a
                  href="mailto:support@indianplaza.com"
                  className="text-primary"
                >
                  support@indianplaza.com
                </a>
              </span>
            </motion.div>
          </div>

          <div className="relative z-[1] mb-10 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <img
                src="circles_pattern_2.png"
                alt="circles pattern"
                width={526}
                height={531}
                className="absolute right-10 top-4 -z-[1] -translate-y-8 scale-110 dark:opacity-10"
              />
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <img
                  src="faq1.jpg" // Replace with an appropriate image URL
                  alt="FAQ and Support"
                  width={400}
                  height={400}
                  className="mb-8 mr-20 mt-20 inline-block rounded-xl"
                />
                {/* Additional content can be added here if needed */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
