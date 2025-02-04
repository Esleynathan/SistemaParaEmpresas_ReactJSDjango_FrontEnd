import axios, { AxiosError } from "axios";
import { ApiError } from "src/models/Api";
import { handleGetAccessToken } from "./auth";

const BASE_URL = 'https://localhost:8000/api/v1';

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

    let headers = {};

    if (withAuth && access_token) {
        headers['Autorization'] = `Bearer ${access_token}`;
    } 

    try {
        const request = await axios(`${BASE_URL}/${endpoint}`, {
            method,
            data: method != 'GET' && data,
            params: method == 'GET' && data,    
        })

        return {
            data: request.data,
            detail: ''
        }
    } catch (e) {
        const error = e as AxiosError<ApiError>;

        return {
            data: null,
            detail: error.response.data.details || error.message
        }

    }

}