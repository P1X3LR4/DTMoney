import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Main} from './styles';
import Header from '@components/Header';
import {BalanceCard, ListBalanceCard} from '@components/BalanceCard';
import {ListTransaction} from '@components/ListTransaction';
import ModalNewTransaction from '@components/ModalNewTransaction';

export default function Home() {
  return (
    <Main>
      <Header />
      <ListBalanceCard>
        <BalanceCard
          title="Entradas"
          description={'Última saída dia 10 de abril'}
          value='R$17.400,00'
        />
        <BalanceCard
          title="Saídas"
          description="Última saída dia 10 de abril"
          value='R$1.400,00'
        />
        <BalanceCard
          title="Total"
          description="Última saída dia 10 de abril"
          value='R$16.000,00'
        />
      </ListBalanceCard>
      <ListTransaction />
      <ModalNewTransaction />
    </Main>
  );
}
