import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #363f5f;
`;
export const TransactionCounter = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #969CB2;
`;
