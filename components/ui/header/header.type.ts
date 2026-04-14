export type HeaderLink = {
  href: string;
  label: string;
};

export type HeaderProps = {
  className?: string;
  brand?: string;
  links?: HeaderLink[];
};
