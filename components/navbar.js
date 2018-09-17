import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  background-color:${props => props.theme.backgroundColor};;
  display: flex;
  align-items: center;
  justify-content: center;
  color:${props => props.theme.color};
  width:100vw;
  height:4rem;
  a{
    text-decoration: none;
    margin:0 .5rem;
    color:white;
  }
`

const Navbar = () => (
  <Container>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
  </Container>
)

export default Navbar;
