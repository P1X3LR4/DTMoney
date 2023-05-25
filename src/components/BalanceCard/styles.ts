import styled, {css} from 'styled-components/native';
import {CardBalanceProps} from '.';

const backgroundColor = css<Pick<CardBalanceProps, 'title'>>`
  background-color: ${props =>
    props.title !== 'Total' ? '#FFFFFF' : '#33CC95'};
`;
const textColor = css<Pick<CardBalanceProps, 'title'>>`
  color: ${props => (props.title !== 'Total' ? '#363F5F' : '#FFFFFF')};
`;

export const Container = styled.View<Pick<CardBalanceProps, 'title'>>`
  width: 280px;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  padding: 24px;
  margin-left: 24px;
  margin-right: 24px;
  ${backgroundColor};
`;

export const Content = styled.View`
  flex-direction: column;
  gap: 64px;
`;
export const Title = styled.Text<Pick<CardBalanceProps, 'title'>>`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  ${textColor};
`;
export const Info = styled.View`
  flex-direction: column;
`;

export const InfoValue = styled.Text<Pick<CardBalanceProps, 'title'>>`
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
  ${textColor};
`;
export const InfoDateMoviments = styled.Text<Pick<CardBalanceProps, 'title'>>`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  ${textColor};
`;

export const Icon = styled.Image``;

export const ListBalanceCard = styled.ScrollView`
  margin-top: -90px;
  flex: none;
`;
