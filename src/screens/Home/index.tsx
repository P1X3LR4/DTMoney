import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Main} from './styles';
import Header from '@components/Header';
import {BalanceCard, ListBalanceCard} from '@components/BalanceCard';
import {
  ListTransaction,
  ListTransactionProps,
} from '@components/ListTransaction';
import {ModalNewTransaction} from '@components/ModalNewTransaction';
import styled from 'styled-components/native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [transactions, setTransactions] = useState<ListTransactionProps[]>([
    {
      id: 1,
      name: 'Desenvolvimento de site',
      value: -12000,
      category: 'Vendas',
      date: '10/04/2023',
      type: 'Gasto',
    },
    {
      id: 2,
      name: 'Desenvolvimento de site',
      value: 59,
      category: 'Vendas',
      date: '10/04/2023',
      type: 'Receita',
    },
  ]);

  const [transactionsItens, setTransactionsItens] = useState<
    ListTransactionProps[]
  >([]);

  /**
   * Função responsável por exibir ou ocultar modal
   */
  const onVisibleModal = () => {
    setModalVisible(!modalVisible);
  };

  function totalCardEntradas(data: ListTransactionProps[]): number {
    return data
      .filter(data => data.type === 'Receita')
      .reduce((acumulador, data) => acumulador + data.value, 0);
  }

  function totalCardSaidas(data: ListTransactionProps[]): number {
    return data
      .filter(data => data.type === 'Gasto')
      .reduce((acumulador, data) => acumulador + data.value, 0);
  }
  function totalCard(data: ListTransactionProps[]): number {
    return data.reduce((acumulador, data) => acumulador + data.value, 0);
  }

  const onCounterTransactions = useCallback(() => {
    const newCounterTransactions = transactions.filter(t => t.id);

    setTransactionsItens(newCounterTransactions);
  }, [transactions]);

  useEffect(() => {
    onCounterTransactions();
  }, [onCounterTransactions]);

  return (
    <Main>
      <Header onPress={onVisibleModal} />
      <ListBalanceCard>
        <BalanceCard
          title="Entradas"
          description={'Última saída dia 10 de abril'}
          value={totalCardEntradas(transactions)}
        />
        <BalanceCard
          title="Saídas"
          description="Última saída dia 10 de abril"
          value={totalCardSaidas(transactions)}
        />
        <BalanceCard
          title="Total"
          description="Última saída dia 10 de abril"
          value={totalCard(transactions)}
        />
      </ListBalanceCard>
      <ListTransaction data={transactions} counter={transactionsItens} />
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
