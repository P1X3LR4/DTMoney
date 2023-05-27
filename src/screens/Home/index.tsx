import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Main} from './styles';
import Header from '@components/Header';
import {BalanceCard, ListBalanceCard} from '@components/BalanceCard';
import {ListTransaction} from '@components/ListTransaction';
import {ModalNewTransaction} from '@components/ModalNewTransaction';
import styled from 'styled-components/native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  function showModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <Main>
      <Header onPress={showModal} />
      <ListBalanceCard>
        <BalanceCard
          title="Entradas"
          description={'Última saída dia 10 de abril'}
          value="R$17.400,00"
        />
        <BalanceCard
          title="Saídas"
          description="Última saída dia 10 de abril"
          value="R$1.400,00"
        />
        <BalanceCard
          title="Total"
          description="Última saída dia 10 de abril"
          value="R$16.000,00"
        />
      </ListBalanceCard>
      <ListTransaction />
      <ModalNewTransaction
        visible={modalVisible}
        transparent
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </Main>
  );
}
