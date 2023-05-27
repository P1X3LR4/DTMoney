import React from 'react';
import {View, Image} from 'react-native';
import {
  ButtonContainer,
  ButtonLabel,
  HeaderContainer,
  HeaderContent,
  Logo,
} from './styles';

export type HeaderProps = {
  onPress: () => void;
};

export default function Header({onPress}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo source={require('../../assets/images/logo.png')} />
        <ButtonContainer onPress={onPress}>
          <ButtonLabel>Nova Transação</ButtonLabel>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
