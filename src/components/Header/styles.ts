import React from 'react';
import styled from 'styled-components/native';
// flex-row bg-dtmoney-purple-700 pt-6 px-4 pb-20
export const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: #5429cc;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 132px;
`;

// flex-1 flex-row justify-between items-center
export const HeaderContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// bg-dtmoney-purple-500 rounded items-center justify-center px-4 py-3
export const ButtonContainer = styled.TouchableOpacity`
  background-color: #6933ff;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

// font-bold text-dtmoney-gray-50
export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-size: 12px;
  line-height: 18px;
  font-family: 'Poppins-Bold';
`;

export const Logo = styled.Image``;

// #5429CC - BG Header
// #E5E5E5 - BG Main
// #12A454 - CL Balance Plus
// #363F5F - CL Text
// #969CB2 - CL Text Legend
// #FFFFFF - BG Card
// #6933FF - BG Button
