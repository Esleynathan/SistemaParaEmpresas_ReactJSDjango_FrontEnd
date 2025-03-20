import axios, { AxiosError } from "axios";
import { ApiError } from "src/models/Api";
import { handleGetAccessToken } from "./auth";

const BASE_URL = 'http://127.0.0.1:8000/api/v1';
// const BASE_URL = 'process.env.REACT_APP_API_BASE_URL';

export const useApi = async <TypeDataResponse> (
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: object,
    withAuth: boolean = true,
): Promise<{
    data?: TypeDataResponse,
    detail: string
}> => {
    //Lógica de autenticação
    const access_token = handleGetAccessToken();

    const config = {
        method,
        headers: {
            'Authorization': withAuth ? `Bearer ${access_token}` : '',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        url: `${BASE_URL}/${endpoint}`,
        data: method !== 'GET' ? data : undefined,
        params: method === 'GET' ? data : undefined
    };

    try {
        const request = await axios(config);

        return {
            data: request.data,
            detail: ''
        }
    } catch (e) {
        const error = e as AxiosError<ApiError>;

        return {
            data: null,
            detail: error.response.data.detail || error.message
        }

    }

}