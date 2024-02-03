import { Link } from "react-router-dom";
import '../assets/styles/style.css'
const MenuSidebar = () => {
  return (
    <div className="menuSidebar col-2 m-0 p-0 d-flex align-items-center justify-content-center">
      <ul className=" list-unstyled bg-light rounded-4 p-3 col-8">
        <li className="list-item rounded-3 p-3 mt-3 mb-3 ">
          <Link to="/" className="text-decoration-none d-flex flex-column align-items-center justify-content-center text-secondary  ">
            <i className="bi bi-person-vcard"></i>
            About
          </Link>
        </li>
        <li className="list-item rounded-3 p-3 mt-3 mb-3">
          <Link to="/resume" className="text-decoration-none d-flex flex-column align-items-center justify-content-center text-secondary  ">
            <i className="bi bi-file-earmark-person"></i>
            Resume
          </Link>
        </li>

        <li className="list-item rounded-3 p-3 mt-3 mb-3">
          <Link to="/portfolio" className="text-decoration-none d-flex flex-column align-items-center justify-content-center text-secondary  ">
            <i className="bi bi-briefcase"></i>
            Works
          </Link>
        </li>
        <li className="list-item rounded-3 p-3 mt-3 mb-3">
          <Link to="/blogs" className="text-decoration-none d-flex flex-column align-items-center justify-content-center text-secondary  ">
            <i className="bi bi-newspaper"></i>
            Blogs
          </Link>
        </li>
        <li className="list-item rounded-3 p-3 mt-3 mb-3">
          <Link to="/contact" className="text-decoration-none d-flex flex-column align-items-center justify-content-center text-secondary  ">
            {/* <i className="bi bi-person-lines-fill"></i>  */}
            <i className="fa-regular fa-address-book"></i>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuSidebar;
