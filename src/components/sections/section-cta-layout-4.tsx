import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SectionCTALayout4 = () => {
  return (
    <section className="bg-muted px-6 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-8">
              Get, keep and grow more customers. We’re here to help.
            </h2>

            <Link to="/contact">
              <Button size="lg">
                Let’s Work Together
                <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTALayout4;
