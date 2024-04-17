import { useState } from "react";
import store from './store';
import { Provider } from 'react-redux';
import GlobalModal from "./shared/components/modal/globalModal/GlobalModal";
import Navigation from "./Navigation";




const App = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Provider store={store}>
        <GlobalModal />
            <Navigation/>        
        </Provider>
    )
}

export default App