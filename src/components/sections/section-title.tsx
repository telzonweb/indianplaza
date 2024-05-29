import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  sectionClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
};

const SectionTitle = ({
  children,
  subtitle,
  sectionClasses,
  titleClasses,
  subtitleClasses,
}: SectionTitleProps) => {
  return (
    <div className={cn("mx-auto my-10", sectionClasses)}>
      <h2 className={cn("font-Caveat text-4xl lg:text-6xl ")}>{children}</h2>
      {subtitle && <p className={cn("font-Libre text-lg")}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
