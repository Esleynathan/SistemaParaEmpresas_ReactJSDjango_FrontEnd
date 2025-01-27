import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"


export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [count, setCount] = useState(0)

    const handleOnClick = () => setCount(count + 1)

    useEffect(() => {
        // Método 1: Ele exclui todos os querys strings
        // setSearchParams({ count: String(count)})

        // Método 2: Preserva todas as querystrings
        // searchParams.set('count', String(count))
        // setSearchParams(searchParams)

        console.log(searchParams.get('parametro2'))
        setSearchParams(searchParams)

    }, [count])

    return (
        <div>
            <h1>Essa é a página PRODUTOS</h1>

            <button onClick={handleOnClick}>Adicionar mais um</button>
        </div>
    )
}