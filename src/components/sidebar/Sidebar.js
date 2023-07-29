import { Home, Compass, List, Clock } from "react-feather";
import { NavLink } from "react-router-dom";

import SidebarStyles from "./Sidebar.module.css";


const Sidebar = ({setShowCreatePost}) => {
  const styleActive = ({ isActive }) =>
    isActive  ? `${SidebarStyles.active}` : "";

  return (
    <nav className={`flex-container ${SidebarStyles.sidebar}`}>
      <ul>
        <li className={SidebarStyles.listItem}>
          <NavLink to="/" className={styleActive}>
            <Home className={SidebarStyles.icons} /> Home
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to="/explore" className={styleActive}>
            <Compass className={SidebarStyles.icons} /> Explore
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to="/playlists" className={styleActive}>
            <List className={SidebarStyles.icons} /> Playlists
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to="/watchLater" className={styleActive}>
            <Clock className={SidebarStyles.icons} /> Watch Later
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export { Sidebar };