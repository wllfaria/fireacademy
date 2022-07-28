import { FeedbackCard } from "../FeedbackCard";
import * as S from './styles'

export function ValorantFeedbacks() {
    return (
        <S.Container>
            {Array.from({ length: 4 }).map((_, i) => (
                <FeedbackCard key={i} image="/static/feedback-image-1.png" student="Liekki" feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tincidunt neque. In hac habitasse platea dictumst."/>
            ))}
        </S.Container>
    )
}