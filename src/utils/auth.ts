import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRequest } from "./requests";
import { setUser, setUserEnterprise } from "./redux/reducers/authReducer";

const LOCAL_STORAGE_KEY = 'AUTH_ACCESS';

export const handleGetAccessToken = () => {return localStorage.getItem(LOCAL_STORAGE_KEY) ?? ''};

export const useAuth = () => {
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const { signIn, getUser } = useRequest();

    const user = {
        user: auth.user,
        enterprise: auth.enterprise
    }

    const handleInitUser = async () => {
        const access_token = handleGetAccessToken();
        if (!access_token) return;

        const response = await getUser();

        if (!response.detail) {
            dispatch(setUser(response.data.user));
            dispatch(setUserEnterprise(response.data.enterprise));
        }
    }

    const handlePermissionExists = (permissionsCodename: string) => {
        if (auth.enterprise.is_owner) return true;

        return auth.enterprise.permissions.some(p => p.codename == permissionsCodename);
    }

    const handleSignIn = async (email: string, password: string) => {
        console.log('2º Etapa -> utils/auth.ts -> Chamando signIn com (auth.ts)::', email, password);

        const response = await signIn({ email, password });
    
        console.log('Resposta de signIn (auth.ts):', response);

        if (!response.detail) {
            dispatch(setUser(response.data.user));
            dispatch(setUserEnterprise(response.data.enterprise));

            // Save access token
            localStorage.setItem(LOCAL_STORAGE_KEY, response.data.access);
        }

        return response;
    }

    const handleSignOut = () => {
        dispatch(setUser(null));
        dispatch(setUserEnterprise(null));

        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    return {
        user,
        isLogged: auth.user != null,
        handleInitUser,
        handlePermissionExists,
        handleSignIn,
        handleSignOut
    };


}