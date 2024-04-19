import { TouchableOpacity, View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.styles"
import Input from "../../../shared/components/input/Input"
import Button from "../../../shared/components/button/Button"
import { theme } from "../../../shared/themes/themes"
import { useLogin } from "../hooks/useLogin"
import Text from "../../../shared/components/text/Text"
import { textTypes } from "../../../shared/components/text/texteTypes"

export default function Login() {
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleGoToCreateUser,
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
                <TouchableOpacity onPress={handleGoToCreateUser}>
                    <Text
                    margin="16px"
                    color={theme.color.mainTheme.primary}
                    type={textTypes.PARAGRAPH_SEMI_BOLD}
                    >
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    title="ENTRAR"
                    loading={loading}
                    onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    )
}