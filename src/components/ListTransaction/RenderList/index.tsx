import React from 'react';
import * as List from './styles';
import {ListTransactionProps} from '..';

type Props = {
  item: ListTransactionProps;
};

const MoneyFormater = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);
};

export default function RenderList({item}: Props) {

  return (
    <List.Container>
      <List.Body>
        <List.Name>{item.name}</List.Name>
        <List.Value type={item.type}>
          {item.type === 'Gasto' ? '- ' + MoneyFormater(item.value) : MoneyFormater(item.value)}
        </List.Value>
      </List.Body>
      <List.Footer>
        <List.Category>{item.category}</List.Category>
        <List.Date>{item.date}</List.Date>
      </List.Footer>
    </List.Container>
  );
}
