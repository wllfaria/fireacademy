import * as S from '../styles/pages/home'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    const goTo = (game: 'league' | 'valorant') => router.push(game)

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Escolha seu jogo</S.Title>
            </S.TitleContainer>
            <S.GameCard background="league" onClick={() => goTo('league')}>
                <S.GameTitle>League of Legends</S.GameTitle>
            </S.GameCard>
            <S.GameCard background="valorant" onClick={() => goTo('valorant')}>
                <S.GameTitle>Valorant</S.GameTitle>
            </S.GameCard>
        </S.Container>
    )
}