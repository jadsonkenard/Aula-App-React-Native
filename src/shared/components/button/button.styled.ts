import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
    margin?: string
}


export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
        ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
`

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
        ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
`

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
    
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.color.mainTheme.primary}

`
export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
    background-color: ${theme.color.grayTheme.gray100};
`

export const ActivityIndicatorButton = styled.ActivityIndicator`
    margin-left: 8px;
`