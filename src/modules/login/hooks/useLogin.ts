import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useUserReducer } from "../../../store/reducers/userReducer/useUserReducer";

export const useLogin = () => {
    const { user } = useUserReducer();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();

    console.log('user', user)

    const handleOnPress = async () => {
        authRequest({
            email,
            password,
        })
    }

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('')
        setEmail(event.nativeEvent.text)
    }

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('')
        setPassword(event.nativeEvent.text)
    }
    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword
    }
}