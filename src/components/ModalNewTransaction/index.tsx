import React from 'react';
import {View} from 'react-native';
import * as MD from './styles';

export default function ModalNewTransaction() {
  type ModalNewTransactionProps = {
    visible: boolean;
  };
  return (
    <MD.Modal animationType="slide" transparent={true} visible={false}>
      <MD.Overlayer>
        <MD.Container>
          <MD.Header>
            <MD.Title>Cadastrar transação</MD.Title>
            <MD.ButtonClose>
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
          </MD.Form>
        </MD.Container>
      </MD.Overlayer>
    </MD.Modal>
  );
}
