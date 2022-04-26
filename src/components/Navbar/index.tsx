import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLinkR, NavLogo, NavMenu, ImgLogo } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'



export function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href='/' passHref>
            <NavLogo>
              <ImgLogo src='/images/logo.svg' />
            </NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Soluções</NavLinks>
            </NavItem>
            <NavItem>
              <Link href='/blog' passHref>
                <NavLinkR href='/blog'>Blog</NavLinkR>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/store' passHref>
                <NavLinkR href='/store'>Loja</NavLinkR>
              </Link>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Contato</NavLinks>
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