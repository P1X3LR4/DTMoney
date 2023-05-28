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

type Props = {
  data: ListTransactionProps[];
  counter: ListTransactionProps[];
};

export const ListTransaction = ({data, counter}: Props) => {
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
        <L.TransactionCounter>{counter.length} itens</L.TransactionCounter>
      </L.Header>

      <FlatList
        data={data}
        renderItem={({item}) => <RenderList item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </L.Container>
  );
};
