import Head from "next/head";

import { MarginContainer } from "../../components/InfoSection/InfoElements";
import { homeObjEight, homeObjFive, homeObjFour, homeObjNine, homeObjSeven, homeObjSix, homeObjTen } from "../../components/InfoSection/Data";
import { InfoSection } from "../../components/InfoSection";




export default function Solucoes({ }) {
  return (
    <>
      <Head>
        <title>Soluções | Organa Biotech</title>
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