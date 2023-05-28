import React from 'react';
import * as List from './styles';
import {ListTransactionProps} from '..';
import { CurrencyFormatter } from '@components/CurrencyFormatter';

type Props = {
  item: ListTransactionProps;
};

export default function RenderList({item}: Props) {

  return (
    <List.Container>
      <List.Body>
        <List.Name>{item.name}</List.Name>
        <List.Value type={item.type}>
          {CurrencyFormatter(item.value)}
        </List.Value>
      </List.Body>
      <List.Footer>
        <List.Category>{item.category}</List.Category>
        <List.Date>{item.date}</List.Date>
      </List.Footer>
    </List.Container>
  );
}
