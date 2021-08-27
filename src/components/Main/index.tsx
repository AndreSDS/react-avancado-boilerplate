import { Wrapper, Logo, Title, Description, Illustration } from './styles'
export const Main = () => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e um texto escrito react avançado"
    />
    <Title>React Avançado</Title>
    <Description>TypeScript, ReactJS, NextJs e Styled Components</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor sentado na cadeira e em frente ao computador"
    />
  </Wrapper>
)
