import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import { Icon } from "../icon/Icon";

export const ContainerModal = styled.View`
    position: absolute;
    bottom: 0px;
    background-color: ${theme.color.neutralTheme.white};
    height: 200px;

    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    z-index: 9;

    border-width: 1px;
    border-color: ${theme.color.neutralTheme.black};

    /* shadow-color: ${theme.color.neutralTheme.black};
    shadow-offset: {
        width: 0;
        height: 0;
    }
    shadow-opacity: 1;
    shadow-radius: 1px;
    elevation: 10 */

`

export const IconCloseModal = styled(Icon)`
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 10;
`