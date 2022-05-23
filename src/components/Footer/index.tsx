import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkA, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkS } from './FooterElements'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/images/organa_logo_branco.png'

export function Footer() {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Sobre </FooterLinkTitle>
              <FooterLinkS
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >Sobre</FooterLinkS>
              <FooterLinkS to='services'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >Soluções</FooterLinkS>
              <Link href='/blog' passHref>
                <FooterLink href='/blog'>Blog</FooterLink>
              </Link>
              <Link href='/Store' passHref>
                <FooterLink href='/Store'>Loja</FooterLink>
              </Link>
              <FooterLinkS to='contact'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >Contato</FooterLinkS>
              <FooterLink href='/signin'>Portal</FooterLink>
              <FooterLink href='/politica-de-privacidade'>Política de Privacidade</FooterLink>
              <FooterLink href='/termos-de-uso'>Termos de Uso</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contato </FooterLinkTitle>
              <FooterLink href='https://wa.me/5547984970998?text=Olá%20Guilherme%20te%20encontrei%20pelo%20site,%20gostaria%20de%20conhecer%20melhor%20a%20Organa!' target='_blank'>WhatsApp</FooterLink>
              <FooterLink href="mailto:guilherme@organabiotech.com.br" target='_blank'>Email</FooterLink>
              <FooterLink href='tel:+5547984970998' target='_blank'>Telefone</FooterLink>
              <FooterLink href="https://www.google.com/maps/place/Organa+Biotech+Solu%C3%A7%C3%B5es+Ambientais/@-26.2515686,-48.8777027,17z/data=!3m1!4b1!4m5!3m4!1s0x94deb199fc35c2df:0xfc029aac9ad76b66!8m2!3d-26.2517356!4d-48.8755097" target='_blank'>Endereço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Redes Sociais </FooterLinkTitle>
              <FooterLinkA href="https://www.facebook.com/organabiotech/" target="_blank">Facebook</FooterLinkA>
              <FooterLinkA href="https://www.instagram.com/organabiotech/" target="_blank">Instagram</FooterLinkA>
              <FooterLinkA href="https://www.linkedin.com/company/organa-biotech/" target="_blank">Linkedin</FooterLinkA>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>
              <Image src={Logo} width="200" height="66" />
            </SocialLogo>
            <WebsiteRights>Organa Biotech © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/organabiotech/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/organabiotech/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/company/organa-biotech/" target="_blank" aria-label="Linkedin">
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
