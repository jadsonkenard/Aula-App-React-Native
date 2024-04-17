import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    customMargin?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text`
    ${(props : { color: any; }) => (props.color ? `color: ${props.color};` : '')}
    ${(props : { customMargin: any; }) => (props.customMargin ? `margin: ${props.customMargin};` : '')}

    padding-top: 3px;
    font-family: ${(props: { fontFamily: any; }) => props.fontFamily};
    font-size: ${(props: { fontSize: any; }) => props.fontSize}

`