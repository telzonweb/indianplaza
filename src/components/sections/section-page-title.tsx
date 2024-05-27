import { cn } from "@/lib/utils";

type SectionPageTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  titleClasses?: string;
  subtitleClasses?: string;
};

const SectionPageTitle = ({
  children,
  subtitle,
  titleClasses,
  subtitleClasses,
}: SectionPageTitleProps) => {
  return (
    <section className="relative w-full bg-muted pb-32 pt-48 dark:bg-slate-900">
      <img
        src="/mainImages/sectionHeading.jpg"
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt="Background"
      />
      <div className="container relative mx-auto max-w-3xl pt-32 text-center">
        <h1
          className={cn("mb-6 font-PTSans text-5xl text-white", titleClasses)}
        >
          {children}
        </h1>
        {subtitle && (
          <p className={cn("text-lg text-white", subtitleClasses)}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionPageTitle;
