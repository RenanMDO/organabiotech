import Head from "next/head";

import { MarginContainer } from "../../components/InfoSection/InfoElements";
import { homeObjEight, homeObjFive, homeObjFour, homeObjNine, homeObjSeven, homeObjSix, homeObjTen } from "../../components/InfoSection/Data";
import { InfoSection } from "../../components/InfoSection";




export default function Solucoes({ }) {
  return (
    <>
      <Head>
        <title>Soluções | Organa Biotech</title>
        <meta
          name="description"
          content="Oferecemos diversos serviços ambientais, que vão desde compostagem até inventario de gases de efeito estufa e com a metodologia do GHG Protocol. Saiba como podemos auxiliar sua empresa a atingir suas metas de sustentabilidade."
        />
      </Head>
      <MarginContainer>
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        <InfoSection {...homeObjSix} />
        <InfoSection {...homeObjSeven} />
        <InfoSection {...homeObjEight} />
        <InfoSection {...homeObjNine} />
        <InfoSection {...homeObjTen} />
      </MarginContainer>

    </>
  )
}