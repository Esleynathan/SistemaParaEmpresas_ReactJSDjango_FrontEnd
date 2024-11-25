type Props = {
    onClick: (label: string) => void;
}

export const Button = ({ onClick }: Props) => {
    const label = "Meu texto do botão!"

    return (
    <button 
        onClick={() => onClick('Meu texto do alert!')}
    >
        {label}
    </button>
    )
}