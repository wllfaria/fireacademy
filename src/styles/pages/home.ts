import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
`

export const TitleContainer = styled.div`
    position: fixed;
    top: 80px;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
`

export const GameTitle = styled.h2`
    position: absolute;
    bottom: 80px;
    left: 50%;
    z-index: 1;
    font-size: ${props => props.theme.fontSizes[1]};
    transform: translateX(-50%);
    color: ${props => props.theme.colors.text.white};
    transition: all 100ms;
`

export const Title = styled.h1`
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.colors.primary[500]};
`

type GameCardProps = {
    background: 'league' | 'valorant'
}

export const GameCard = styled.div<GameCardProps>`
    width: 50vw;
    background-image: url(${props => props.background === 'league' ? 'static/league.jpg' : '/static/valorant.jpg'});
    background-size: cover;
    background-position: ${props => props.background === 'league' ? '40%' : '52.3%'};
    height: 100vh;
    cursor: pointer;
    position: relative;

    &:hover {
        ::after {
            background: linear-gradient(180deg, rgba(237,122,0,0), rgba(237,122,0, 0.3));
        }
    }

    ::after {
        content: '';
        position: absolute;
        background: linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0));
        top: 0;
        transition: all 300ms;
        left: 0;
        width: 100%;
        height: 100%;
    }
`