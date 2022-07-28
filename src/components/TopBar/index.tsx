import { useRouter } from 'next/router';
import * as S from './styles';

export function TopBar() {
    const router = useRouter()

    const shouldDisplayHome = () => {
        return router.pathname !== '/valorant' && router.pathname !== '/league'
    }

    return (
        <S.TopBar>
            <S.Logo src="/static/logo.png" height="60"/>
            <S.Nav>
                <ul>
                    {shouldDisplayHome() && <li>Início</li>}
                    <li>Saiba Mais</li>
                    <li>Professor</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>

            </S.Nav>
        </S.TopBar>
    )
}