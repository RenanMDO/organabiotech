import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

export function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Soluções</ServicesH1>
      <ServicesWrapper>
        <ServicesCard href='/solucoes/#compostagem'>
          <ServicesIcon src='/images/time.svg' />
          <ServicesH2>Compostagem Acelerada</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#gravimetria'>
          <ServicesIcon src='/images/svg-4.svg' />
          <ServicesH2>Gravimetria</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#treinamento'>
          <ServicesIcon src='/images/training.svg' />
          <ServicesH2>Treinamento</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#ghg'>
          <ServicesIcon src='/images/svg-3.svg' />
          <ServicesH2>Inventário de Gases de Efeito Estufa - GEE</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#gee'>
          <ServicesIcon src='/images/gestao.svg' />
          <ServicesH2>Gestão de Emissões de Gases de Efeito Estufa</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#prce'>
          <ServicesIcon src='/images/projeto.svg' />
          <ServicesH2>Projetos de Redução e/ou Compensação de Emissões</ServicesH2>
        </ServicesCard>
        <ServicesCard href='/solucoes/#eventos'>
          <ServicesIcon src='/images/Evento.svg' />
          <ServicesH2>Evento Carbono Neutro</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
