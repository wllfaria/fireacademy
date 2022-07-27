import * as S from './styles';

export function ValorantIntro() {
    return (
        <S.Intro>
            <S.Title>O seu sucesso é o nosso sucesso!</S.Title>
            <S.Description>Assista o vídeo e saiba mais</S.Description>
            <iframe width="1000" height="650" src="https://www.youtube.com/embed/8BYHMHRneCQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </S.Intro>
    )
}