import React, {Children} from 'react';
import * as S from './styles';

const icons = {
  Entradas: require('../../assets/images/entrada.png'),
  Saídas: require('../../assets/images/saida.png'),
  Total: require('../../assets/images/total.png'),
};

export type CardBalanceProps = {
  title: 'Entradas' | 'Saídas' | 'Total';
  description: string;
  value: number;
};

export const BalanceCard = ({title, description, value}: CardBalanceProps) => {
  return (
    <S.Container title={title}>
      <S.Content>
        <S.Title title={title}>{title}</S.Title>
        <S.Info>
          <S.InfoValue title={title}>R$ {value}</S.InfoValue>
          <S.InfoDateMoviments title={title}>{description}</S.InfoDateMoviments>
        </S.Info>
      </S.Content>
      <S.Icon source={icons[title]} />
    </S.Container>
  );
};

export const ListBalanceCard = (props: any) => {
  return (
    <S.ListBalanceCard
      horizontal
      contentContainerStyle={{columnGap: -16}}
      showsHorizontalScrollIndicator={false}
      >
      {props.children}
    </S.ListBalanceCard>
  );
};
