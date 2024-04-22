import { useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enums";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { NativeSyntheticEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [createUser, setCreateuser] = useState<CreateUserType>({
        confirmPassword: '',
        cpf: '',
        email: '',
        name: '',
        password: '',
        phone: '',
    });
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
        setCreateuser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: event.nativeEvent.text
        }))
    }
    return {
        createUser,
        loading,
        handleOnChangeInput,
        handleCreateUser,
        
    }
}