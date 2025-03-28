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
import { Employee } from "src/models/Employee"
import { useAuth } from "src/utils/auth"
import { useRequests } from "src/utils/requests"

type Props = {
    employeesList   : Employee[]
refreshList: () => void
}

const EmployeesTable = ( {employeesList, refreshList}: Props ) => {
    const { handlePermissionExists } = useAuth();
    const { deleteEmployee } = useRequests();

    const navigate = useNavigate();

    const handleEditEmployee  = ( id: number ) => {
        navigate(`/employees/edit/${id}`)
    }

    const handleDeleteEmployee = async ( id: number ) => {
        await deleteEmployee(id);
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
                                <TableCell>Nome</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell align="right">Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {employeesList.map((employee) => (
                                <TableRow hover key={employee.id}>
                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            #{employee.id}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {employee.name}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            fontWeight="bold"
                                            gutterBottom
                                        >
                                            {employee.email}
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="right">
                                        {handlePermissionExists('change_employee') &&
                                            <Tooltip title="Editar funcionário" arrow>
                                                <IconButton
                                                    onClick={() => handleEditEmployee(employee.id)}
                                                    color='primary'
                                                    size='small'
                                                >
                                                    <EditTwoToneIcon />
                                                </IconButton>
                                            </Tooltip>
                                        }

                                        {handlePermissionExists('delete_employee') &&
                                            <Tooltip title="Excluir funcionário" arrow>
                                                <IconButton
                                                    onClick={() => handleDeleteEmployee(employee.id)}
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

export default EmployeesTable