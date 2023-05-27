import React from 'react';
import {View, FlatList} from 'react-native';
import * as L from './styles';
import RenderList from './RenderList';

export type ListTransactionProps = {
  id: number;
  name: string;
  value: number;
  category: string;
  date: string;
  type: 'Gasto' | 'Receita';
};

export const ListTransaction = () => {
  const list: ListTransactionProps[] = [
    {
      id: 1,
      name: 'Desenvolvimento de site',
      value: 12000,
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
    {
      id: 3,
      name: 'Desenvolvimento de site',
      value: 0.15,
      category: 'Alimentação',
      date: '10/04/2023',
      type: 'Gasto',
    },
    {
      id: 4,
      name: 'Desenvolvimento de site',
      value: 120,
      category: 'Casa',
      date: '10/04/2023',
      type: 'Receita',
    },
  ];

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 24,
          width: '100%',
        }}
      />
    );
  };

  return (
    <L.Container>
      <L.Header>
        <L.Title>Listagem</L.Title>
        <L.TransactionCounter>4 itens</L.TransactionCounter>
      </L.Header>

      <FlatList
        data={list}
        renderItem={({item}) => <RenderList item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </L.Container>
  );
};
