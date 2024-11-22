type Props = {
    name: string
}

export const UserName = ({ name }: Props) => {
    // let name = 'Bago Doce'
    // let names = {name1: 'BagoDoce', name2: 'Ésley Nathan'}
    // const formatName = (value : string) => value.toUpperCase()

    return (
        <h4>Meu nome é: {name.toUpperCase()}.</h4>
    )
}