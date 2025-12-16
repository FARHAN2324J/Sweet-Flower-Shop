import { Link } from "react-router-dom";
import { navLinks } from "../../constants/data";
const Navbar = () => {
    const handleClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <nav className="border-b py-3 mx-6 flex items-center justify-between border-black sticky top-0 z-50 backdrop-blur-lg">
      <Link to="/" className="Display tracking-tighter" onClick={handleClick}>
        <span className="hidden md:inline">Our Blooms®</span>
        <span className="md:hidden">O.B.</span>
      </Link>
      <ul>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="inline-flex items-center mx-2 Caption1 uppercase"
          >
            <Link
              to={`/${link.id}`}
              onClick={handleClick}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
