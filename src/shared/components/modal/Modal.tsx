import React from 'react';
import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Pressable, View} from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/texteTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {


    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
            {...props}
            >
            <ContainerModal>
                <Text
                color={theme.color.mainTheme.primary}
                type={textTypes.PARAGRAPH_SEMI_BOLD}>
                    {title}</Text>
                <Text>{text}</Text>
                <Button title='OK' onPress={onCloseModal}/>
                <IconCloseModal name="cross" onPress={onCloseModal}/>
            </ContainerModal>
        </ModalReact>
    )
}

export default Modal