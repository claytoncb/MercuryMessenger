import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar () {
  return (
    <>
      <div className="NavBar">
          <ul>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Inbox</Link>
            </li>
          </ul>
      </div>
      <Outlet />
    </>
  )
};

