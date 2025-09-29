interface NavItem {
  name: string;
  sectionID?: string; // for in-page scroll
  linkTo?: string; // for navigation
}

// Declaring Nav Items in a list
export const NavList: NavItem[] = [
  { name: "Home", sectionID: "hero" },
  { name: "Projects", sectionID: "projects" },
  { name: "Technologies", sectionID: "technologies" },
  { name: "Contact", sectionID: "contact" },
];
