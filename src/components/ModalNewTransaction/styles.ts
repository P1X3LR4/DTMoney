import React from 'react';
import styled from 'styled-components/native';

export const Modal = styled.Modal``;
export const Overlayer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background: #000000ad;
`;
export const Container = styled.View`
  background-color: #fff;
  padding: 24px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

//flex-row items-center justify-between mb-4
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;
`;
export const Title = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #363f5f;
`;
export const ButtonClose = styled.TouchableOpacity``;
export const Icon = styled.Image``;
export const Form = styled.View`
  gap: 16px;
`;
export const Input = styled.TextInput`
  background: #e7e9ee;
  border: 2px solid #d7d7d7;
  border-radius: 5px;
  padding: 16px 24px;
`;
export const ButtonSubmit = styled.TouchableOpacity``;
