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
        src="https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421127.jpg?t=st=1716188926~exp=1716192526~hmac=f833f256f3ba2abb2ea9f9558dc64648ceeba794712386ea9017f9bb3ff37b40&w=826"
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt="Background"
      />
      <div className="container relative mx-auto max-w-3xl pt-32 text-center">
        <h1 className={cn("mb-6 text-white", titleClasses)}>{children}</h1>
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
