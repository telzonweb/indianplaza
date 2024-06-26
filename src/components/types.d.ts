interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

type MainNavItem = NavItemWithOptionalChildren;

interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

type Testimonial = {
  image?: string;
  name?: string;
  company?: string;
  comment?: string;
  rating?: number | 0;
};

type IconBox = {
  title?: string;
  description?: string;
  icon?: string | RemixiconReactIconComponentType;
  iconBase?: string;
  shadow?: string;
};

type Post = {
  id: number;
  modified: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  yoast_head_json?: {
    description: string;
    og_description: string;
  };
  acf?: {
    [key: string]: string;
  };
  featuredmedia?: {
    alt_text: string;
    media_details: {
      width: number;
      height: number;
      source_url: string;
    };
  },
  author?: {
    name: string;
    avatar_urls: {
      [key: string]: string;
    };
  }
};
