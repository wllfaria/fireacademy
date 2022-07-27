import * as S from './styles';

export function TopBar() {
    return (
        <S.TopBar>
            <img src="/static/logo.png" height="60"/>
            <S.Nav>
                <ul>
                    <li>Início</li>
                    <li>Saiba Mais</li>
                    <li>Professor</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>

            </S.Nav>
        </S.TopBar>
    )
}