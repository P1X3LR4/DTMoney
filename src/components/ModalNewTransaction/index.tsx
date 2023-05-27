import React from 'react';
import {View} from 'react-native';
import * as MD from './styles';

export type ModalNewTransactionProps = {
  visible: boolean;
  onPress: () => void;
};

export const ModalNewTransaction = ({
  visible,
  onPress,
}: ModalNewTransactionProps) => {
  return (
    <MD.Modal animationType="fade" transparent={true} visible={visible}>
      <MD.Overlayer>
        <MD.Container>
          <MD.Header>
            <MD.Title>Cadastrar transação</MD.Title>
            <MD.ButtonClose onPress={onPress}>
              <MD.Icon source={require('../../assets/images/close.png')} />
            </MD.ButtonClose>
          </MD.Header>
          <MD.Form>
            <MD.Input placeholder="Nome" placeholderTextColor={'#969CB2'} />
            <MD.Input placeholder="Preço" placeholderTextColor={'#969CB2'} />
            <MD.Input
              placeholder="Categoria"
              placeholderTextColor={'#969CB2'}
            />
            <MD.ButtonSubmit>
              <MD.ButtonSubmitLabel>Cadastrar</MD.ButtonSubmitLabel>
            </MD.ButtonSubmit>
          </MD.Form>
        </MD.Container>
      </MD.Overlayer>
    </MD.Modal>
  );
};
