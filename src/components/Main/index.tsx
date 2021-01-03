import * as S from './styles';

const Main = () => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo.svg"
            alt="imagem de um átomo e react avançado escrito ao lado."
        />
        <S.Title>React Avançado</S.Title>
        <S.Description>
            Typescript, ReactJS, NextJS e Styled Components
        </S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Um desenvolver de frente para a tela com código."
        />
    </S.Wrapper>
);

export default Main;
