import { Link } from "react-router-dom";
const MenuSidebar = () => {
  return (
    <>
      <h1>Menu Sidebar</h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuSidebar;
