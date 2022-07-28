import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    full?: boolean
}

export function Button({ children, onClick, full }: ButtonProps) {
    return (
        <S.Button onClick={onClick} full={full}>{children}</S.Button>
    )
}