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
  margin-bottom: 24px;
`;
export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  line-height: 30px;
  color: #363f5f;
`;
export const ButtonClose = styled.TouchableOpacity``;
export const Icon = styled.Image``;
export const Form = styled.View`
  gap: 16px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#969CB2',
})`
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  padding: 16px 24px;
  font-size: 18px;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 18px 24px;
  background-color: #33cc95;
`;

export const ButtonSubmitLabel = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

export const ContainerType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;
export const Type = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
`;
export const IconType = styled.Image`
  width: 24px;
  height: 24px;
`;
export const LabelType = styled.Text`
  color: #363f5f;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
`;
