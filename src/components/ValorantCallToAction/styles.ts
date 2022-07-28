import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 120px;
    grid-gap: 16px;
    margin-top: 64px;

    @media (max-width: 1200px) {
        padding: 0 64px;
        grid-template-columns: repeat(1, 1fr);
    }


    @media (max-width: 570px) {
        padding: 0 32px;
    }

`

export const CallToActionText = styled.p`
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 8px;

    @media (max-width: 1400px) {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const CallToActionImage = styled.img`
    width: 100%;
`

export const ButtonContainer = styled.div`
    margin-top: 32px;
`
