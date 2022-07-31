import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";
import "./Navbar.css"
//NAVBAR WILL BE SHOWN IN ALL SCREENS
const Navbar = () => {
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="header">
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
      </Link>
      <Link to="/createpost" onClick={() => setTab("/createpost")}>
        {tab === "/createpost" ? (
          <Add style={{ color: "black" }} />
        ) : (
          <AddOutlined />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "black" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>

      <Link to="/profile" onClick={() => setTab("/profile")}>
        {tab === "/profile" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
      <Link to="/signin" onClick={() => setTab("/signin")}>
        {tab === "/signin" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
      <Link to="/signup" onClick={() => setTab("/signup")}>
        {tab === "/signup" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
    </div>
  );
}
 
export default Navbar;
