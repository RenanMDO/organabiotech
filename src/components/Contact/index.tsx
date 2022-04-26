import React from 'react'
import { FaMailBulk, FaMapPin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2, ContactText, ContactH2, ContactP, ContactLinks, ContactLink, ButtonContact } from './ContactElements'

export function Contact() {
  return (
    <ContactContainer id='contact'>
      <ContactWrapper>
        <ContactRow imgStart={false}>
          <Column1>
            <ContactText>
              <ContactH2>Entre em contato com a gente!</ContactH2>
              <ContactP>Entre em contato com a Organa, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</ContactP>
              <ButtonContact href='https://wa.me/5547984970998?text=Olá%20Guilherme%20te%20encontrei%20pelo%20site,%20gostaria%20de%20conhecer%20melhor%20a%20Organa!' target='_blank'>
                <FaWhatsapp />
                Entre em contato
              </ButtonContact>
            </ContactText>
          </Column1>
          <Column2>
            <ContactLinks>
              <ContactLink href='tel:+5547984970998' target='_blank'>
                <FaPhone className='icon' />
                (47) 9 8497-0998
              </ContactLink>
              <ContactLink href="https://www.google.com/maps/place/Organa+Biotech+Solu%C3%A7%C3%B5es+Ambientais/@-26.2515686,-48.8777027,17z/data=!3m1!4b1!4m5!3m4!1s0x94deb199fc35c2df:0xfc029aac9ad76b66!8m2!3d-26.2517356!4d-48.8755097" target='_blank'>
                <FaMapPin className='icon' />
                Joinville, Santa Catarina BR
              </ContactLink>
              <ContactLink href="mailto:contato@organabiotech.com.br" target='_blank'>
                <FaMailBulk className='icon' />
                contato@organabiotech.com.br
              </ContactLink>
            </ContactLinks>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}
