import axios, { AxiosRequestConfig } from "axios";
import { MethodEnum } from "../../../enums/methods.enums";
import { getAuthorizationToken } from "./auth";


export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionAPI {
    static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
        const token = await getAuthorizationToken();

        const config: AxiosRequestConfig = {
            headers: {
                Authorization: token,
                'Content-Type': 'application\json',
            }
        }

        switch (method) {
            case MethodEnum.DELETE:
            case MethodEnum.GET:
                return (await axios[method]<T>(url, config)).data;
            case MethodEnum.POST:
            case MethodEnum.PUT:
            case MethodEnum.PATCH:
            default:
                return (await axios[method]<T>(url, body, config)).data;
        }
    }
    static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
        return this.call<T>(url, method, body).catch((error) => {
            if(error.response) {
                switch (error.response.status) {
                    case 401:
                    case 403:
                        throw new Error("Sem permissão");
                    default:
                        throw new Error("Sem conexão com o banco de dados");
                }
            }
            throw new Error("Sem conexão com o banco de dados");
        });
    }
}

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MethodEnum.GET);
}

export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MethodEnum.DELETE);
}

export const ConnectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodEnum.POST, body);
}

export const ConnectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodEnum.DELETE, body);
}

export const ConnectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
}