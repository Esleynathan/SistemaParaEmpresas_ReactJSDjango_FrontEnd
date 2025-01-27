import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <div>
            <strong>404 - Página não encontrada</strong>

            <Link to='/'>Voltar para Home</Link>
        </div>
    )
}