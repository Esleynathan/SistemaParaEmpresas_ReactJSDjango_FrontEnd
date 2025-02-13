import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware"
import { PermissionDetail } from "src/models/Permission"
import { useRequest } from "src/utils/requests"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { LinearProgress } from "@mui/material"

const AddGroup = () => {
    const [requestLoading, setRequestLoading] = useState(true);
    const [permissionsData, setPermissionsData] = useState<PermissionDetail[]>([]);
    const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

    const { getPermissions, addGroup } = useRequest();

    const handleGetPermissions = async () => {
        const response = await getPermissions();

        if (!response.detail) {
            setPermissionsData(response.data.permissions);
        }
    }

    useEffect(() => {
        Promise.resolve(handleGetPermissions()).finally(() => {
            setRequestLoading(false);
        });
    }, [])

    return (
        <PermissionMiddleware codeName="add_group">
            <Helmet>
                <title>Adicionar Cargo</title>
            </Helmet>

            {requestLoading && <LinearProgress sx={{ height: 2 }} color="primary" />}

        </PermissionMiddleware>
    )
}

export default AddGroup