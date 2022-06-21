import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

export function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Soluções</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src='/images/time.svg' />
          <ServicesH2>Compostagem Acelerada</ServicesH2>
          <ServicesP>Compostagem in company</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='/images/svg-4.svg' />
          <ServicesH2>Gravimetria</ServicesH2>
          <ServicesP>Gravimetria em Empresa</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='/images/svg-2.svg' />
          <ServicesH2>Análise</ServicesH2>
          <ServicesP>Identificação dos custos atuais com destinação</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='/images/svg-3.svg' />
          <ServicesH2>Treinamento</ServicesH2>
          <ServicesP>Treinamento para aumento da valorização dos recicláveis</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
