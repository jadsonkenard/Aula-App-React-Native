import { View} from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.styles"
import Input from "../../../shared/components/input/Input"
import Button from "../../../shared/components/button/Button"
import { theme } from "../../../shared/themes/themes"
import { useLogin } from "../hooks/useLogin"

export default function Login() {
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();


    return (
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="cover" source={require('../../../assets/images/logo.png')} />
                <Input
                    value={email}
                    errorMessege={errorMessage}
                    margin="0px 0px 8px 0px"
                    placeholder="Digite seu E-mail"
                    title="E-mail:"
                    onChange={handleOnChangeEmail}
                />
                <Input
                    value={password}
                    errorMessege={errorMessage}
                    secureTextEntry
                    placeholder="Digite sua senha"
                    title="Senha:"
                    onChange={handleOnChangePassword}
                    
                />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    title="ENTRAR" margin="16px"
                    loading={loading}
                    onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    )
}