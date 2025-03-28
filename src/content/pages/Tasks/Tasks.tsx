import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "src/components/PageTitle";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import TasksTable from "src/components/TasksTable";
import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware";
import { Task } from "src/models/Task";
import { useRequests } from "src/utils/requests";

const Tasks = () => {
    const [requestLoading, setRequestLoading] = useState(true);
    const [tasksData, setTasksData] = useState<Task[]>([]);

    const { getTasks } = useRequests();

    const handleGetTasks = async () => {
        const response = await getTasks();
    
        if (response.data && response.data.tasks) {
            setTasksData(response.data.tasks);
        } else {
            console.error("No tasks data found in response:", response);
            setTasksData([]);
        }

        setRequestLoading(false);
    }

    useEffect(() => {
        handleGetTasks();
    }, [])

    return (
        <PermissionMiddleware codeName="view_task">
            <Helmet>
                <title>Tarefas</title>
            </Helmet>

            <PageTitleWrapper>
                <PageTitle
                heading="Tarefas"
                subHeading="Consulte as tarefas dos funcionários e execute ações sobre elas"
            />
            </PageTitleWrapper>

            <Container maxWidth="xl" sx={{
                marginX: requestLoading ? '-10%' : 0,
                transition: 'all 0.5s'
            }}>
                <TasksTable
                    tasksList={tasksData}
                    refreshList={handleGetTasks}
                />
            </Container>

        </PermissionMiddleware>
    )

}

export default Tasks