type Props = {
    roles: {id: number, title: string}[]
}

export const UserRoles = ({roles}: Props) => {
    // const roles = ['CEO', 'CTO', 'admin']
    // const roles = [
    //         {id: 1, title:'CEO'}, 
    //         {id: 2, title:'CTO'}, 
    //         {id: 3, title:'admin'}
    // ]

    // const filterRoles = (value: { id: number; title: string; }): boolean => value.title.includes('C')
    // const filteredRoles = roles.filter(value => value.title.includes('C'))

    return (
        <ul>
            {roles.map((value, key) => (
                <li key={key}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
}
