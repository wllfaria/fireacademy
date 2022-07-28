import * as S from './styles';

export function ValorantIntro() {
    return (
        <S.Intro>
            <S.IntroSlice>
                <S.Title>O seu sucesso é o nosso sucesso!</S.Title>
                <S.Description>Assista o vídeo e saiba mais</S.Description>
            </S.IntroSlice>
            <S.Video src="https://www.youtube.com/embed/8BYHMHRneCQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></S.Video>
        </S.Intro>
    )
}