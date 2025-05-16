export type Product = {
  id: string;
  name: string;
  category:
    | "chocolate-dipped"
    | "classics"
    | "season-specials"
    | "build-your-box";
  isPremium?: boolean;
  description?: string;
  priceNote?: string;
};

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  days: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}
