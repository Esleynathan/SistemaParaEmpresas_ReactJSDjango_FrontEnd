type Props = {
    email: string
}

export const UserEmail = ({email}: Props) => {
    return (
        <h4>Meu User é {email}</h4>
    )
}