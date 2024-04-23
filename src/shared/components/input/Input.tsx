import { TextInput, TextInputProps, View } from "react-native"
import { ContainerInput, IconEye } from "./input.styled"
import { DisplayFlexColumn } from "../globalStyles/globalView.style"
import Text from "../text/Text";
import { textTypes } from "../text/texteTypes";
import { theme } from "../../themes/themes";
import { forwardRef, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native/types";
import { insertKaskInCpf } from "../../functions/cpf";
import { insertKaskInPhone } from "../../functions/phone";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessege?: string;
    secureTextEntry?: boolean;
    margin?: string;
    type?: 'cel-phone' | 'cpf';
}

const Input = forwardRef<TextInput, InputProps>(
    ({ secureTextEntry, margin, title, errorMessege, onChange, type, ...props }: InputProps, ref) => {

    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        if (onChange){
            let text = event.nativeEvent.text;
        switch (type) {
            case 'cpf':
                text = insertKaskInCpf(text);
                break;
            case 'cel-phone':
                text = insertKaskInPhone(text);
                break;
            default:
                text = event.nativeEvent.text;
                break;
        }
            onChange({
                ...event,
                nativeEvent: {
                    ...event.nativeEvent,
                    text,
                }
            });
        }
    }

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
                {...props}
                hasSecureTextEntry={secureTextEntry}
                secureTextEntry={currentSecure}
                isError={!!errorMessege}
                onChange={handleOnChange}
                ref={ref}
                />
                {secureTextEntry && (<IconEye onPress={handleOnPressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20}/>)}
            </View>
            {errorMessege && (
                <Text
                    margin="0px 0px 0px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                    color={theme.color.oragneTheme.orange80}>{errorMessege}</Text>
            )}
        </DisplayFlexColumn>
    );
});
export default Input;
