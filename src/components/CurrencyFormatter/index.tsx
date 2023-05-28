import React from 'react';
import {View} from 'react-native';

export function CurrencyFormatter(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(value);
}
