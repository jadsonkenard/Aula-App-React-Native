import { useState } from "react";
import { RequestLogin } from "../types/requestLogin";
import { ReturnLogin } from "../types/returnLogin";
import { ConnectionAPIPost } from "../functions/connections/connectionAPI";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../enums/MenuUrl.enum";
import { setAuthorizationToken } from "../functions/connections/auth";



export const useRequest = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);

        await ConnectionAPIPost<ReturnLogin>('http://192.168.18.6:8080/auth', body)
            .then((result) => {
                setAuthorizationToken(result.accessToken);
                setUser(result.user);
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME}],
                });
            })
            .catch(() => {
                setModal({
                    visible: true,
                    title: 'Erro',
                    text: 'Usuário ou senha inválidos'
                });
            });
        setLoading(false);
    };
    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage
    };
};
