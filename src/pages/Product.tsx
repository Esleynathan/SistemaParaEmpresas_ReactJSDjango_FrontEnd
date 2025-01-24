import { useParams } from "react-router-dom"

export const Product = () => {

    const { productId, categoryId} = useParams()

    return (
        <div>
            O ID do meu produto é = {productId}
            O ID da minha categoria é = {categoryId}
        </div>
    )
}