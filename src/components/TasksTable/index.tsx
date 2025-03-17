import { Container,
    Card,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Typography,
    Tooltip,
    IconButton,
} from "@mui/material"
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useNavigate } from "react-router"
import { Task } from "src/models/Task"
import { useAuth } from "src/utils/auth"
import { useRequests } from "src/utils/requests"
import { useDate } from "src/utils/formatDate"

type Props = {
    tasksList:Task[]
refreshList: () => void
}

const TasksTable = ( {tasksList, refreshList}: Props ) => {
    const { handlePermissionExists } = useAuth();
    const { deleteTask } = useRequests();
    const { formatAPIdate } = useDate();

    const navigate = useNavigate();

    const handleEditTask  = ( id: number ) => {
        navigate(`/tasks/edit/${id}`)
    }

    const handleDeleteTask = async ( id: number ) => {
        await deleteTask(id);
        refreshList();
    }


    return (
        <Container maxWidth="lg">
            <Card>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Título</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Prazo Máximo</TableCell>
                                <TableCell align="right">Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {tasksList.map((task) => (
                                <TableRow hover key={task.id}>
                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            #{task.id}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {task.title}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {task.status}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {task.due_date ? task.due_date : 'Não definido'}
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="right">
                                        {handlePermissionExists('change_task') &&
                                            <Tooltip title="Editar tarefa" arrow>
                                                <IconButton
                                                    onClick={() => handleEditTask(task.id)}
                                                    color='primary'
                                                    size='small'
                                                >
                                                    <EditTwoToneIcon />
                                                </IconButton>
                                            </Tooltip>
                                        }

                                        {handlePermissionExists('delete_task') &&
                                            <Tooltip title="Excluir tarefa" arrow>
                                                <IconButton
                                                    onClick={() => handleDeleteTask(task.id)}
                                                    color='error'
                                                    size='small'                                                
                                                >
                                                    <DeleteTwoToneIcon />
                                                </IconButton>
                                            </Tooltip>
                                        }

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            
        </Container>
    )
}

export default TasksTable