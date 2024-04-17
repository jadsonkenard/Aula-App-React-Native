import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import { Icon } from "../icon/Icon";

interface ContainerInputProps {
    isError?: boolean;
    hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.color.neutralTheme.white};;
    color: ${theme.color.neutralTheme.black};
    border-radius: 6px;

    padding-right: ${(props: { hasSecureTextEntry: any; }) => (props.hasSecureTextEntry ? '50px' : '16px')};

    border-width: 1px;
    border-color: ${(props: { isError: any; }) => props.isError ? theme.color.oragneTheme.orange80 : theme.color.grayTheme.gray80};
`
export const IconEye = styled(Icon)`
    position: absolute;
    right: 12px;
    top: 14px;

`