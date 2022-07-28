import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 120px;
    grid-gap: 16px;
    margin-top: 64px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 64px;
    }

    @media (max-width: 768px) {
        padding: 0 32px;
        grid-template-columns: repeat(1, 1fr);
    }
`