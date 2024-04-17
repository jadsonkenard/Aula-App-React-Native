import { TouchableOpacityProps } from "react-native";
import Text from "../text/Text";
import { ButtonContainer, ButtonSecondary, ActivityIndicatorButton, ButtonDisabled } from "./button.styled";
import { theme } from "../../themes/themes";
import { textTypes } from "../text/texteTypes";
import { GradientButton } from "./button.styled";


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
}

const Button = ({ title, type, margin, loading, onPress, disabled, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if(!disabled && !loading && onPress) {
            onPress()
        }
    }

    const renderText = (color: string) => (
        <>
            <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>{title}</Text>
            {loading &&
                <ActivityIndicatorButton color={theme.color.neutralTheme.white} />
            }
        </>
    )

    if(disabled){
        return (
            <ButtonDisabled {...props} margin={margin}>
                {renderText(theme.color.neutralTheme.white)}
            </ButtonDisabled>
        )

    }
    
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
                    {renderText(theme.color.mainTheme.primary)}
                    <Text type={textTypes.BUTTON_BOLD} color={theme.color.mainTheme.primary}>{title}</Text>
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props} onPress={handleOnPress}>
                    <GradientButton
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[theme.color.purpleTheme.purple80, theme.color.pinkTheme.pink80]}>
                        {renderText(theme.color.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
            )
    }







}
export default Button