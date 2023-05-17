import React, { FC } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { isValidExpirationDate } from '../../domain/utils';
import { styles } from '../../styles/styles';

type ExpirationDateProps = {
  expirationDate: string;
  setExpirationDate: (text: string) => void;
  expirationDateTouch: boolean;
  setExpirationDateTouch: (touch: boolean) => void;
}

const ExpirationDate: FC<ExpirationDateProps> = ({ expirationDate, setExpirationDate, expirationDateTouch, setExpirationDateTouch }) => {

  const handleExpirationDateChange = (text: string) => {
    let formattedText = text;
    if (text.length === 2 && !text.includes('/')) {
      formattedText = `${text}/`;
    }
    setExpirationDate(formattedText);
  };
  return (
    <>
      <TextInput
        testID="expiration-date"
        label="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
        keyboardType="numeric"
        maxLength={5}
        style={[styles.input, {width: '100%'}]}
        error={expirationDateTouch && !isValidExpirationDate(expirationDate)}
        onBlur={() => setExpirationDateTouch(true)}
      />
      {!isValidExpirationDate(expirationDate) && expirationDateTouch && (
        <HelperText type="error" visible={true}>
          Invalid Expiration Date
        </HelperText>
      )}
    </>);
};

export default ExpirationDate;
