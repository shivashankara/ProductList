import { Link } from "react-router-dom";
import { HeaderContainer } from "./appStyle";

export default function HeaderComponent(props) {
  return (
    <>
      <HeaderContainer>
        <Link to="/"> Home</Link>
        <Link to="/products"> Products</Link>
      </HeaderContainer>
    </>
  );
}
