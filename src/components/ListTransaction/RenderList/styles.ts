import React from 'react';
import styled from 'styled-components/native';
import {ListTransactionProps} from '..';

export const Container = styled.View`
  padding: 24px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Body = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
`;

export const Value = styled.Text<Pick<ListTransactionProps, 'type'>>`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  color: ${props => (props.type !== 'Receita' ? '#E62E4D' : '#12A454')};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Category = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: #969cb3;
`;
export const Date = styled(Category)``;
