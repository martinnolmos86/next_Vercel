import ActiveLink from "./ActiveLink";
import styles from "./NavBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <>
      <nav className={styles["container-nav"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink text={text} href={href} key={href}></ActiveLink>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
