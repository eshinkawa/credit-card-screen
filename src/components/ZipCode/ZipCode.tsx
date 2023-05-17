import { HelperText, TextInput } from 'react-native-paper';
import { styles } from '../../styles/styles';
import { isValidZipCode } from '../../domain/utils';
import React, { FC } from 'react';

type ZipCodeProps = {
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  zipCodeTouch: boolean;
  setZipCodeTouch: (zipCodeTouch: boolean) => void;
}

const ZipCode: FC<ZipCodeProps> = ({zipCode, setZipCode, zipCodeTouch, setZipCodeTouch}) => {
  return <>
    <TextInput
      testID={"zipcode"}
      label="Zip Code"
      value={zipCode}
      onChangeText={setZipCode}
      keyboardType="numeric"
      style={styles.input}
      maxLength={5}
      onBlur={() => setZipCodeTouch(true)}
      error={!isValidZipCode(zipCode) && zipCodeTouch}
    />
    {!isValidZipCode(zipCode) && zipCodeTouch && (
      <HelperText type="error" visible={true}>
        Invalid Zip Code
      </HelperText>
    )}
  </>
}

export default ZipCode;
