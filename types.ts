export type MenuLinksProps = {
    name: string;
    label: string;
    link: string;
    icon?: JSX.Element;
    children?: MenuLinksProps[];
  };