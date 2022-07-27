import styled from 'styled-components'

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
`

export const Nav = styled.nav`
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
`
