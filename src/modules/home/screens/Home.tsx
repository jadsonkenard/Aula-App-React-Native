import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import Button from "../../../shared/components/button/Button"
import Text from "../../../shared/components/text/Text"
import { logout } from "../../../shared/functions/connections/auth";
import { View } from "react-native";


const Home = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <View>
            <Text>HOME</Text>
            <Button title="Sair" onPress={() => logout(navigation)} />
        </View>
    )
}

export default Home