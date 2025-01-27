import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <strong> Essa é a pagina Home </strong>
            <br></br>

            <button> 
                Ir para pagina de ABOUT 

                <Link to='/about'>Página de sobre</Link>                
            </button>
        </div>
    )
}