import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "src/utils/auth";

type Props = {
    children: ReactNode;
    codeName: string
}

export const PermissionMiddleware = ( { children, codeName }: Props) => {  
    const navigate = useNavigate();

    const { handlePermissionExists } = useAuth();

    const handleRefreshPage = () => {
        navigate(0);
    }


    if (!handlePermissionExists(codeName)) {
        return (
            <Container maxWidth='sm' sx= {{mt: 16}}>
                <Box textAlign="center">
                    <img 
                        alt="status-500"
                        height={260}
                        src="/static/images/status/500.svg"
                    />

                    <Typography variant="h2" sx={{my: 2}}>
                        Você ainda não tem permissão para acessar essa area!
                    </Typography>

                    <Typography color="text.seconday" sx={{mb: 4}}>
                        Se você solicitou para a administração, a permissão para acessar essa área, atualize a pagina!
                    </Typography>

                    <button onClick={handleRefreshPage} className="btn-primary">
                        Atualizar pagina
                    </button>
                </Box>
            </Container>
        )
    }

    return (
        <>
            {children}
        </>
    )
}