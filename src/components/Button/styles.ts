import styled from 'styled-components'

type ButtonProps = {
    full?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background: ${props => props.theme.colors.primary[500]};
    outline: none;
    border: none;
    padding: 16px 32px;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    transition: background 150ms;

    width: ${props => props.full ? '100%' : 'unset'};

    @media (max-width: 768px) {
        font-size: 20px;
    }

    &:hover {
        background: ${props => props.theme.colors.primary[400]};
    }
`