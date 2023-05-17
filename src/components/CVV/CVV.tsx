import { HelperText, TextInput } from 'react-native-paper';
import { styles } from '../../styles/styles';
import { isAmexCard, isValidCvv } from '../../domain/utils';
import React, { FC } from 'react';

type CVVProps = {
  cvv: string;
  setCvv: (cvv: string) => void;
  cardNumber: string;
  setCvvTouch: (cvvTouch: boolean) => void;
  cvvTouch: boolean;
};

const CVV: FC<CVVProps> = ({cvv, setCvv, cardNumber, setCvvTouch, cvvTouch}) => {
  return (
    <>
      <TextInput
        testID={"cvv"}
        label="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        style={styles.input}
        maxLength={isAmexCard(cardNumber) ? 4 : 3}
        onBlur={() => setCvvTouch(true)}
        error={!isValidCvv(cvv) && cvvTouch}
      />
      {!isValidCvv(cvv) && cvvTouch && (
        <HelperText type="error" visible={true}>
          Invalid CVV
        </HelperText>
      )}
    </>
  );
};

export default CVV;
