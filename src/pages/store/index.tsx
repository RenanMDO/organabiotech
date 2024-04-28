import Head from "next/head";
import { Contact } from "../../components/Contact";


export default function Store() {
  return (
    <>
      <Head>
        <title>Loja | Organa Biotech</title>
        <meta
          name="description"
          content="Visite nossa loja online para encontrar produtos da Organa Biotech."
        />
      </Head>
      <Contact />
    </>
  );
}
