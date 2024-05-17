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
        src="https://img.freepik.com/premium-photo/wooden-table-product-display-blurred-cafe-interior_100209-8740.jpg?w=1380"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="relative container mx-auto max-w-3xl text-center pt-32">
        <h1 className={cn("mb-6 text-white", titleClasses)}>{children}</h1>
        {subtitle && (
          <p className={cn("text-lg text-white", subtitleClasses)}>{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default SectionPageTitle;
