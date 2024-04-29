import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tabAction } from "../../store/navbar/navbarLink";
const NavBar = () => {
  const dispatch = useDispatch();
  const tabslice = useSelector((store) => store.tabSlice);
  const handlerTabAction = (tabaction) => {
    dispatch(tabAction.setTabSlice(tabaction));
  };

  return (
    <>
      <nav className={`${style.navbardiv} bg-dark rounded-0`}>
        <div className="d-flex justify-content-between container-fluid mt-1">
          <a className="navbar-brand text-white ms-4 fs-3 fw-bold" href="#">
            <span className="fs-3 text-warning">Port</span>folio
          </a>

          <div className={` ${style.listItemContainer}`}>
            <ul className="d-flex justify-content-between mb-2 mb-lg-0 ">
              <li
                className={`nav-item ms-4 ${style.listitems}`}
                onClick={() => handlerTabAction("Home")}
              >
                <Link
                  to="/Home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ms-4 ${style.listitems}`}
                onClick={() => handlerTabAction("Skill")}
              >
                <Link to="/Skill" className="nav-link " aria-current="page">
                  Skill's
                </Link>
              </li>
              <li
                className={`nav-item ms-4 ${style.listitems}`}
                onClick={() => handlerTabAction("AboutUs")}
              >
                <Link to="/AboutUs" className="nav-link " aria-current="page">
                  AboutUs
                </Link>
              </li>
              <li
                className={`nav-item ms-4 ${style.listitems}`}
                onClick={() => handlerTabAction("ContactUs")}
              >
                <Link to="/ContactUs" className="nav-link " aria-current="page">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
