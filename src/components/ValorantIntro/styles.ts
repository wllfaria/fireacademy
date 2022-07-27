import styled from 'styled-components'

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.theme.margins[5]};
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.primary[500]};
    font-size: ${props => props.theme.fontSizes[2]};
`

export const Description = styled.p`
    font-size: ${props => props.theme.fontSizes[4]};
    margin: 0;
`