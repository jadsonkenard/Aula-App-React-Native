import { TextInputProps, View } from "react-native"
import { ContainerInput, IconEye } from "./input.styled"
import { DisplayFlexColumn } from "../globalStyles/globalView.style"
import Text from "../text/Text";
import { textTypes } from "../text/texteTypes";
import { theme } from "../../themes/themes";
import { useState } from "react";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessege?: string;
    secureTextEntry?: boolean;
    margin?: string
}

const Input = ({ secureTextEntry, margin, title, errorMessege, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)

    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current)
    }

    return (
        <DisplayFlexColumn customMargin={margin}>
            {title && (
                <Text
                    margin="0px 0px 4px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                    color={theme.color.grayTheme.gray100}
                >{title}</Text>
            )}
            <View>
                <ContainerInput
                hasSecureTextEntry={secureTextEntry}
                secureTextEntry={currentSecure}
                isError={!!errorMessege} {...props} />
                {secureTextEntry && (<IconEye onPress={handleOnPressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20}/>)}
            </View>
            {errorMessege && (
                <Text
                    margin="0px 0px 0px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                    color={theme.color.oragneTheme.orange80}>{errorMessege}</Text>
            )}
        </DisplayFlexColumn>
    )
}
export default Input
