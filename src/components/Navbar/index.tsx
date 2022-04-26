import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'



export function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href='/' passHref>
            <NavLogo>
              Organa
            </NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href='#about' passHref>
                <NavLinks href='#about'>Sobre</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='#solution' passHref>
                <NavLinks href='#solution'>Soluções</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/blog' passHref>
                <NavLinks href='/blog'>Blog</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/store' passHref>
                <NavLinks href='/store'>Loja</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='#contact' passHref>
                <NavLinks href='#contact'>Contato</NavLinks>
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link href='/signin' passHref>
              <NavBtnLink href="/signin">Entrar Portal</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}