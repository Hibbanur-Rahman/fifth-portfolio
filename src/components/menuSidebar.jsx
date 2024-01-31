import { Link } from "react-router-dom";
const MenuSidebar = () => {
  return (
    <div className="col-3 m-0 p-0">
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
    </div>
  );
};

export default MenuSidebar;
