import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Stack, TextField, Button, LinearProgress, Snackbar } from "@mui/material";
import PageTitle from "src/components/PageTitle";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware";
import { useDate } from "src/utils/formatDate";
import { useRequests } from "src/utils/requests";
import SelectEmployee from "src/components/SelectEmployee";
import SelectTaskStatus from "src/components/SelectTaskStatus";

const AddTask = () => {
    const [requestLoading, setRequestLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [dateTimeInput, setDateTimeInput] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState<number | ''>('');


    const navigate = useNavigate();
    const { formatDateForAPI } = useDate();
    const { addTask } = useRequests();

    const handleAdd = async () => {
        const [title, description, employee_id, status_id] = [titleInput, descriptionInput, selectedEmployee, selectedStatus];
        const due_date = dateTimeInput ? formatDateForAPI(dateTimeInput) : null;

        if (!title || !employee_id) {
            setInfoMessage('O nome é obrigatório');
            return;
        }

        setRequestLoading(true);
        const response = await addTask({ title, description, due_date, employee_id, status_id });
        setRequestLoading(false);

        if (response.detail) {
            setInfoMessage(response.detail);
            return;
        } else {
            navigate('/tasks');
        }
    }

    return (
        <PermissionMiddleware codeName="add_task">
            <Helmet>
                <title>Adicionar uma tarefa</title>
            </Helmet>

            {requestLoading && <LinearProgress sx={{ height: 2 }} color="primary" />}

            <PageTitleWrapper>
                <PageTitle
                    heading="Adicionar uma Tarefa"
                    subHeading="Adicione uma tarefa e defina o nome, permissões e etc"
                />
            </PageTitleWrapper>

            <Snackbar 
                open={infoMessage !== ''} 
                onClose={() => setInfoMessage('')}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                message={infoMessage}
            />
            
            <Container maxWidth='lg'>
                <Stack maxWidth={700} spacing={3}>
                    <TextField
                        fullWidth
                        label="Título *"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Descrição"
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Data de Vencimento"
                        value={dateTimeInput}
                        onChange={(e) => setDateTimeInput(e.target.value)}
                    />
                    <SelectTaskStatus
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                    />
                    <SelectEmployee
                        selectedEmployee={selectedEmployee}
                        setSelectedEmployee={setSelectedEmployee}
                    />
                    <Button
                        variant="outlined"
                        sx={{ width: 90, mt: 3 }}
                        onClick={requestLoading ? () => null : handleAdd}
                        disabled={requestLoading}
                    >
                        Adicionar
                    </Button>
                </Stack>
            </Container>
        </PermissionMiddleware>
    )
}

export default AddTask;