import Link from "next/link";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarLinkR, SidebarMenu, SidebarRoute, Sidebarwrapper, SideBtnWrap } from "./SidebarElements";


export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Sidebarwrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            Sobre
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle} smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            Soluções
          </SidebarLink>
          <Link href='/blog' passHref>
            <SidebarLinkR onClick={toggle}>
              Blog
            </SidebarLinkR>
          </Link>
          <Link href='/store' passHref>
            <SidebarLinkR onClick={toggle}>
              Loja
            </SidebarLinkR>
          </Link>
          <SidebarLink to="contact" onClick={toggle} smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            Contato
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href='/login' passHref>
            <SidebarRoute onClick={toggle}>
              Entrar Portal
            </SidebarRoute>
          </Link>
        </SideBtnWrap>
      </Sidebarwrapper>
    </SidebarContainer>
  )
}