import React from 'react';
import * as List from './styles';

type Props = {
  item: {
    id: number;
    name: string;
    value: string;
    category: string;
    date: string;
    type: 'Gasto' | 'Receita';
  };
};

export default function RenderList({item}: Props) {
  return (
    <List.Container>
      <List.Body>
        <List.Name>{item.name}</List.Name>
        <List.Value type={item.type}>
          {item.type === 'Gasto' ? '- ' + item.value : item.value}
        </List.Value>
      </List.Body>
      <List.Footer>
        <List.Category>{item.category}</List.Category>
        <List.Date>{item.date}</List.Date>
      </List.Footer>
    </List.Container>
  );
}
