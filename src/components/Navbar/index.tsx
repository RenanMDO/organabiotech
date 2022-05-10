import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLinkR, NavLogo, NavMenu, ImgLogo } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'



export function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);


  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href='/' passHref>
            <NavLogo>
              <ImgLogo src='/images/Logo.svg' />
            </NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href='/#about' passHref>
                <NavLinks to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}>Sobre</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/#services' passHref>
                <NavLinks to='services' smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}>Soluções</NavLinks>
              </Link>
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
              <Link href='/#contact' passHref>
                <NavLinks to='contact' smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}>Contato</NavLinks>
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