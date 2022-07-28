import styled from 'styled-components'

export const Logo = styled.img`
    height: 60px;
    margin: 0 auto;
`

export const TopBar = styled.div`
    padding-left: ${props => props.theme.paddings[4]};
    padding-top: ${props => props.theme.paddings[1]};
    padding-bottom: ${props => props.theme.paddings[1]};
    padding-right: ${props => props.theme.paddings[4]};
    width: 100%;
    background: ${props => props.theme.colors.background.accent};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ul {
        display: flex;
        list-style: none;

        li {
            cursor: pointer;
            margin-left: ${props => props.theme.margins[2]};
            font-size: ${props => props.theme.fontSizes[5]};
            text-transform: uppercase;
            font-weight: bold;

            &:hover {
                color: ${props => props.theme.colors.primary[500]};
            }
        }
    }


    @media (max-width: 768px) {
        justify-content: center;

        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            grid-column-gap: 32px;
            margin: 0;
            margin-top: 16px;

            li {
                margin: 0;
                width: 100%;
                text-align: center;
                font-size: 16px;
            }
        }
    }
`
