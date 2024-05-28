import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SectionCTALayout3 = () => {
  return (
    <section className="pb-16 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-xl px-6 py-20 text-center shadow-sm dark:shadow-slate-950/40">
              <img
                src="hero/gradient_creative.png"
                className="absolute inset-0 h-full w-full dark:hidden"
                sizes="100vw"
                alt="consulting hero gradient"
              />
              <img
                src="hero/gradient_creative_dark.png"
                className="absolute inset-0 hidden h-full w-full dark:block"
                alt="consulting hero gradient"
              />
              <div className="relative mx-auto max-w-md">
                <h2 className="mb-4">Shop with Us Today</h2>
                <p className="mb-8 text-lg">
                  Discover the best of Indian groceries and more, right here in
                  Australia. Our team is ready to assist you with any questions
                  or needs you might have.
                </p>
                <Link to="/contact">
                  <Button size="lg">Visit Stores</Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTALayout3;
