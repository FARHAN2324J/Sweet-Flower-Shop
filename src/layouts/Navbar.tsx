import { navLinks } from "../../constants/data";
const Navbar = () => {
  return (
    <nav className="border-b py-3 mx-6 flex items-center justify-between border-black">
      <a href="#home" className="Display tracking-tighter">
        Our Blooms®
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id} className="inline-flex items-center mx-2 Caption1 uppercase">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
