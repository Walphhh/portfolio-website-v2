interface NavItem {
  name: string;
  sectionID?: string; // for in-page scroll
  linkTo?: string; // for navigation
}

// Declaring Nav Items in a list
export const NavList: NavItem[] = [
  { name: "Home", linkTo: "/" },
  { name: "Projects", sectionID: "projects" },
  { name: "Contact", sectionID: "contact" },
  { name: "About", linkTo: "about" },
];
