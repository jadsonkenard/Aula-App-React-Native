import { useEffect } from "react";
import { ContainerSplash, ImageLogoSplash } from "../styles/splash.style";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enums";
import { useUserReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { getAuthorizationToken } from "../../../shared/functions/connections/auth";
import { UserType } from "../../../shared/types/usetType";

const TIME_SLEEP = 5000

const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { setUser } = useUserReducer();

    useEffect(() => {
        const findUser = async (): Promise<undefined | UserType> => {
            let returnUser;
            const token = await getAuthorizationToken();
            if (token){
                returnUser = await request<UserType>({
                    url: URL_USER,
                    method: MethodEnum.GET,
                    saveGlobal: setUser,
                });
            }
            return returnUser
        }

        const verifyLogin = async () => {
            const [returnUser] = await Promise.all([
                findUser(),
                new Promise((r: any) => setTimeout(r, TIME_SLEEP)),
            ])
            if (returnUser) {
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME }],
                })
            } else {
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.LOGIN }],
                })
            }
        }
        verifyLogin();
    }, [])

    return (
        <ContainerSplash>
            <ImageLogoSplash resizeMode="cover" source={require('../../../assets/images/logo.png')} />
        </ContainerSplash>
    )
}

export default Splash;