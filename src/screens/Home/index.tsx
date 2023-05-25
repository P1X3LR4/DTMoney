import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Main} from './styles';
import Header from '@components/Header';
import {BalanceCard, ListBalanceCard} from '@components/BalanceCard';
import {ListTransaction} from '@components/ListTransactionProps';

export default function Home() {
  return (
    <Main>
      <Header />
      <ListBalanceCard>
        <BalanceCard
          title="Entradas"
          description={'Última saída dia 10 de abril'}
          value={2400}
        />
        <BalanceCard
          title="Saídas"
          description="Última saída dia 10 de abril"
          value={2400}
        />
        <BalanceCard
          title="Total"
          description="Última saída dia 10 de abril"
          value={2400}
        />
      </ListBalanceCard>
      <ListTransaction />
    </Main>
  );
}
