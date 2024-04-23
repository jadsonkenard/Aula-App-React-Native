import { useEffect, useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enums";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native/types";
import { insertKaskInCpf } from "../../../shared/functions/cpf";
import { insertKaskInPhone } from "../../../shared/functions/phone";

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [createUser, setCreateUser] = useState<CreateUserType>({
        confirmPassword: '',
        cpf: '',
        email: '',
        name: '',
        password: '',
        phone: '',
    });

    useEffect(() => {
        if (
            createUser.name !== '' &&
            createUser.phone !== '' &&
            createUser.email !== '' &&
            createUser.cpf !== '' &&
            createUser.password !== '' &&
            createUser.password === createUser.confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [createUser])

    const handleCreateUser = async () => {
       const resultCreateUser = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: createUser,
            message: 'Usuário cadastrado com sucesso!'
        })
        if (resultCreateUser) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN}]
            })
        }
    }

    const handleOnChangeInput = (
        event: NativeSyntheticEvent<TextInputChangeEventData>,
        name: string,
    ) => {
        let text = event.nativeEvent.text;
        switch (name) {
            case 'cpf':
                text = insertKaskInCpf(text);
                break;
            case 'phone':
                text = insertKaskInPhone(text);
                break;
            default:
                text = event.nativeEvent.text;
                break;
        }
        console.log('Text', text)
        setCreateUser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: text,
        }))
    }
    return {
        createUser,
        loading,
        disabled,
        handleOnChangeInput,
        handleCreateUser,
        
    }
}