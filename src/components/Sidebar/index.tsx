import Link from "next/link";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, Sidebarwrapper, SideBtnWrap } from "./SidebarElements";


export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Sidebarwrapper>
        <SidebarMenu>
          <Link href='#about' passHref>
            <SidebarLink>
              Sobre
            </SidebarLink>
          </Link>
          <Link href='#solutions' passHref>
            <SidebarLink onClick={toggle}>
              Soluções
            </SidebarLink>
          </Link>
          <Link href='/blog' passHref>
            <SidebarLink onClick={toggle}>
              Blog
            </SidebarLink>
          </Link>
          <Link href='/store' passHref>
            <SidebarLink onClick={toggle}>
              Loja
            </SidebarLink>
          </Link>
          <Link href='#contact' passHref>
            <SidebarLink onClick={toggle}>
              Contato
            </SidebarLink>
          </Link>
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