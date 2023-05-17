import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import {
  areAllFieldsValidated, isValidCardNumber,
  isValidCvv,
  isValidExpirationDate,
  isValidName,
  isValidZipCode
} from './src/domain/utils';
import { styles } from './src/styles/styles';
import CardNumber from './src/components/CardNumber/CardNumber';
import ExpirationDate from './src/components/ExpirationDate/ExpirationDate';
import CVV from './src/components/CVV/CVV';
import Name from './src/components/Name/Name';
import ZipCode from './src/components/ZipCode/ZipCode';

const App: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardNumberTouch, setCardNumberTouch] = useState<boolean>(false);
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [expirationDateTouch, setExpirationDateTouch] = useState<boolean>(false);
  const [cvv, setCvv] = useState<string>('');
  const [cvvTouch, setCvvTouch] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [firstNameTouch, setFirstNameTouch] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>('');
  const [lastNameTouch, setLastNameTouch] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState<string>('');
  const [zipCodeTouch, setZipCodeTouch] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  const validateForm = (): void => {
    setValidationError('');

    if (!isValidCardNumber(cardNumber)) {
      setValidationError('Invalid credit card number');
      return;
    }

    if (!isValidExpirationDate(expirationDate)) {
      setValidationError('Invalid expiration date');
      return;
    }

    if (!isValidCvv(cvv)) {
      setValidationError('Invalid CVV');
      return;
    }

    if (!isValidName(firstName) || !isValidName(lastName)) {
      setValidationError('Invalid name');
      return;
    }

    if (!isValidZipCode(zipCode)) {
      setValidationError('Invalid zip code');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <CardNumber
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardNumberTouch={cardNumberTouch}
        setCardNumberTouch={setCardNumberTouch}
      />
      <ExpirationDate
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        expirationDateTouch={expirationDateTouch}
        setExpirationDateTouch={setExpirationDateTouch}
      />
      <CVV
        cvv={cvv}
        setCvv={setCvv}
        cvvTouch={cvvTouch}
        setCvvTouch={setCvvTouch}
        cardNumber={cardNumber}
      />

      <Name labelName={"First Name"} name={firstName} setName={setFirstName} touchName={firstNameTouch}
            setTouch={setFirstNameTouch}/>
      <Name labelName={"Last Name"} name={lastName} setName={setLastName} touchName={lastNameTouch}
            setTouch={setLastNameTouch}/>

      <ZipCode zipCode={zipCode} setZipCode={setZipCode} zipCodeTouch={zipCodeTouch} setZipCodeTouch={setZipCodeTouch}/>

      <Button mode="contained"
              onPress={() => alert(`Card has been validated! \n\nCard Number: ${cardNumber}\nExpiration Date: ${expirationDate}\nCVV: ${cvv}\nName: ${firstName} ${lastName}\nZipCode: ${zipCode}`)}
              disabled={!areAllFieldsValidated(cardNumber, expirationDate, cvv, firstName, lastName, zipCode)}>
        Submit
      </Button>
    </View>
  );
};

export default App;
