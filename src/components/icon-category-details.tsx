import { cn } from "@/lib/utils";

type IconBox = {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    description?: string;
    shadow?: string;
  };

  type IconBoxProps = {
    iconBox: IconBox; // Ensure `iconBox` property exists in IconBoxProps
  };
const CategoryDetails = ({
  iconBox: { image, title, description, shadow },
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "relative top-0 z-[1] overflow-hidden rounded-xl bg-white p-10 shadow-sm transition-all duration-200 hover:-top-[.125rem] hover:shadow-lg hover:shadow-slate-500/20 dark:bg-slate-800 dark:hover:shadow-slate-950/40",
        shadow,
      )}
    >
      {image && image.src && image.alt ? (
        <div className="relative mb-4 inline-block">
          <img src={image.src} alt={image.alt} className="h-20 w-20 rounded-full" />
          <span
            className={cn(
              "absolute -right-4 -top-2 -z-[1] block h-10 w-10 rounded-full",
            )}
          ></span>
        </div>
      ) : null}

      {title ? <h3 className="mb-2 text-lg font-bold">{title}</h3> : null}
      {description ? <p className="text-sm">{description}</p> : null}
    </div>
  );
};

export default CategoryDetails;
