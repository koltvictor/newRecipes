import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiLindenLeaf } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Nav>
        <GiLindenLeaf />
        <Logo to={"/"}> chef's recipes </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto, sans-serif;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
