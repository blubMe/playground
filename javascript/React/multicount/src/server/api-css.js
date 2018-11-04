import styled from 'react-emotion'

export const Navbar = styled('nav')`
  width: 100%;
  padding: 0 1rem;
  max-width: 1024px;
  text-align: center;
  ul {
    list-style: none;
    display: ${props => props.flex ? 'flex' : 'block'};
    li {
      margin-left: 8px;
    }
  }
`
export const Url = styled('a')`
  color: #eee;
`