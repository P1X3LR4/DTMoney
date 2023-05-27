import React from 'react';
import {ModalProps, View} from 'react-native';
import * as MD from './styles';

interface ModalNewTransactionProps extends ModalProps {
  onClose: () => void;
}

const icons = {
  Income: require('../../assets/images/entrada.png'),
  Outcome: require('../../assets/images/saida.png'),
};

export const ModalNewTransaction = ({
  onClose,
  ...rest
}: ModalNewTransactionProps) => {
  return (
    <MD.Modal {...rest}>
      <MD.Overlayer>
        <MD.Container>
          <MD.Header>
            <MD.Title>Cadastrar transação</MD.Title>
            <MD.ButtonClose onPress={() => onClose()}>
              <MD.Icon source={require('../../assets/images/close.png')} />
            </MD.ButtonClose>
          </MD.Header>
          <MD.Form>
            <MD.Input placeholder="Nome" />
            <MD.Input placeholder="Preço" />
            <MD.Input placeholder="Categoria" />
            <MD.ContainerType>
              <MD.Type>
                <MD.IconType source={icons['Income']} />
                <MD.LabelType>Income</MD.LabelType>
              </MD.Type>
              <MD.Type>
                <MD.IconType source={icons['Outcome']} />
                <MD.LabelType>Income</MD.LabelType>
              </MD.Type>
            </MD.ContainerType>
            <MD.ButtonSubmit>
              <MD.ButtonSubmitLabel>Cadastrar</MD.ButtonSubmitLabel>
            </MD.ButtonSubmit>
          </MD.Form>
        </MD.Container>
      </MD.Overlayer>
    </MD.Modal>
  );
};
