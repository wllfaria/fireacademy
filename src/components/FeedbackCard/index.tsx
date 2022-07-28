import * as S from './styles'

type FeedbackCardProps = {
    student: string;
    feedback: string;
    image: string;
}

export function FeedbackCard({ student, feedback, image }: FeedbackCardProps) {
    return (
        <S.CardContainer>
            <S.CardImage src={image} />
            <S.CardStudent>{student}</S.CardStudent>
            <S.FeedbackText>{feedback}</S.FeedbackText>
        </S.CardContainer>
    )
}