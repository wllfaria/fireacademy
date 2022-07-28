import styled from 'styled-components'

export const CardContainer = styled.div`
    background: ${props => props.theme.colors.background.accent};
    border-radius: 24px;
    padding: 16px;
`

export const CardImage = styled.img`
    width: 100%;
`

export const CardStudent = styled.p`
    font-size: 48px;
    color: #ED7A00;
    font-weight: bold;
    line-height: 1.5;

    @media (max-width: 1400px) {
        font-size: 32px;
    }

    @media (max-width: 1200px) {
        font-size: 28px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const FeedbackText = styled.p`
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 1400px) {
        font-size: 20px;
    }

    @media (max-width: 1200px) {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`