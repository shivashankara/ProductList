import { Link, NavLink } from "react-router-dom";
import { HeaderContainer } from "./appStyle";

export default function HeaderComponent(props) {
  return (
    <>
      <HeaderContainer>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/Products"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "blue" : "black",
          })}
        >
          Products
        </NavLink>
      </HeaderContainer>
    </>
  );
}
