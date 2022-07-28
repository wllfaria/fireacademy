import styled from 'styled-components'

export const Video = styled.iframe`
    width: 100%;
    height: 600px;

    @media (max-width: 570px) {
        height: 160px;
    }
`

export const Intro = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 0 120px;
    margin-top: ${props => props.theme.margins[7]};

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        font-size: 40px;
        padding: 0 64px;
    }

    @media (max-width: 570px) {
        font-size: 40px;
        padding: 0 32px;
        margin-top: ${props => props.theme.margins[3]};
    }
`

export const IntroSlice = styled.div`
    @media (max-width: 1200px) {
        margin-bottom: ${props => props.theme.margins[7]};
    }

    @media (max-width: 768px) {
        margin-bottom: ${props => props.theme.margins[3]};
    }
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.primary[500]};
    font-size: 80px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 16px;

    @media (max-width: 1200px) {
        font-size: 60px;
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }
`

export const Description = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;

    @media (max-width: 1200px) {
        font-size: 30px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`