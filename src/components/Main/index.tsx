import { Wrapper, Logo, Title, Description, Illustration } from './styles'
export const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJs e Styled Components',
  imgLogo = '/img/logo.svg',
  altLogo = 'Imagem de um átomo e React Avançado escrito ao lado',
  imgIllustration = '/img/hero-illustration.svg',
  altIllustration = 'Um desenvolvedor de frente para uma tela de código'
}) => (
  <Wrapper>
    <Logo src={imgLogo} alt={altLogo} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration src={imgIllustration} alt={altIllustration} />
  </Wrapper>
)
