import Head from "next/head";
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from "../../components/SigninElements";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Portal | Organa Biotech</title>
        <meta
          name="description"
          content="Faça login em sua conta para acessar recursos exclusivos de seus servicoes ambientais. Dashboards, em tempo real de seus projetos."
        />
      </Head>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Entrar no Portal</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}