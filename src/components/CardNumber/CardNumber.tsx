import React, { useState, FC } from 'react';
import { View, TextInputProps } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { isValidCardNumber } from '../../domain/utils';
import { styles } from '../../styles/styles';

type CreditCardNumberProps = {
  cardNumber: string;
  setCardNumber: (cardNumber: string) => void;
  cardNumberTouch: boolean;
  setCardNumberTouch: (cardNumberTouch: boolean) => void;
};

const CardNumber: FC<CreditCardNumberProps> = ({cardNumber, setCardNumber, cardNumberTouch, setCardNumberTouch}) => {
  return (
    <>
      <TextInput
        testID="card-number"
        label="Credit Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        style={styles.input}
        onBlur={() => setCardNumberTouch(true)}
        error={!isValidCardNumber(cardNumber) && cardNumberTouch}
        maxLength={19}
      />
      {!isValidCardNumber(cardNumber) && cardNumberTouch && (
        <HelperText type="error" visible={true} testID="card-number-error">
          Invalid Card Number
        </HelperText>
      )}
    </>);
};

export default CardNumber;
