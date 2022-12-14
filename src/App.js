import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiJapaneseBridge} from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <h1></h1>
      <BrowserRouter>
      <Nav>
        <GiJapaneseBridge />
        <Logo to={"/"}>WeebHut</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      <h3>Author: chillsan99</h3>
      </BrowserRouter>
        
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size:1.5rem;
font-weight:400;
font-family: 'Vazir';
`

const Nav = styled.div`
padding: 1.5rem 0.5rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:3rem;
}`

export default App;

