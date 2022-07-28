import { Button } from '../Button';
import * as S from './styles';

export function ValorantCallToAction() {
    return (
        <S.Container>
            <S.CallToActionImage src="/static/cta-illustration.jpg" />
            <div>
                <S.CallToActionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tincidunt neque. In hac habitasse platea dictumst. Curabitur magna dolor, rhoncus non enim eget, ullamcorper mollis nulla.</S.CallToActionText>
                <S.CallToActionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tincidunt neque. In hac habitasse platea dictumst. Curabitur magna dolor, rhoncus non enim eget, ullamcorper mollis nulla.</S.CallToActionText>
                <S.ButtonContainer>
                    <Button full>Quero Subir de elo</Button>
                </S.ButtonContainer>
            </div>
        </S.Container>
    )
}