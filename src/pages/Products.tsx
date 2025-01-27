import { useNavigate } from "react-router-dom"

export const Products = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/products/categoria/1')
    }
    return (
        <div>
            <h1>Essa é a página PRODUTOS</h1>

            <button onClick={handleOnClick}>Ir para um produto</button>
        </div>
    )
}