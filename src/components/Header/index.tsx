import React from 'react';
import {View, Image} from 'react-native';
import {
  ButtonContainer,
  ButtonLabel,
  HeaderContainer,
  HeaderContent,
  Logo
} from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo source={require('../../assets/images/logo.png')} />
        <ButtonContainer>
          <ButtonLabel>Nova Transação</ButtonLabel>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
