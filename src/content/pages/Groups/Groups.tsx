import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import GroupsTable from "src/components/GroupsTable";
import PageTitle from "src/components/PageTitle";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware";
import { GroupDetail } from "src/models/Group";
import { useRequests } from "src/utils/requests";
import { Container } from "@mui/material";

const Groups = () => {
    const [requestLoading, setRequestLoading] = useState(true)
    const [groupsData, setGroupsData] = useState<GroupDetail[]>([])

    const { getGroups } = useRequests();

    const handleGetGroups = async () => {
        setRequestLoading(true);
        const response = await getGroups();
        
        console.log('Dados recebidos:', response.data); 

        setGroupsData(response.data.groups);
        setRequestLoading(false)
    }

    useEffect(() => {
        handleGetGroups();
    }, [])

    return (
        <PermissionMiddleware codeName='view_group'>
            <>
                <Helmet>
                    <title>Cargos</title>
                </Helmet>

                <PageTitleWrapper>
                    <PageTitle
                        heading="Cargos"
                        subHeading="Consulte os cargos da empresa e execute ações"
                    />
                </PageTitleWrapper>
            </>

            <Container
                maxWidth="xl"
                sx={{
                    marginX: requestLoading ? '-10%' : 0,
                    transition: 'all 0.5s'
                }}
                >
                <GroupsTable
                    refreshList={handleGetGroups}
                    groupsList={groupsData}
                />
            </Container>
        
        
        </PermissionMiddleware>
    )
}

export default Groups;