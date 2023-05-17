import { HelperText, TextInput } from 'react-native-paper';
import { styles } from '../../styles/styles';
import { isValidName } from '../../domain/utils';
import React, { FC, useState } from 'react';

type NameProps = {
  labelName: string;
  name: string;
  setName: (name: string) => void;
  touchName: boolean;
  setTouch: (touch: boolean) => void;
}

const Name: FC<NameProps> = ({labelName, name, setName, touchName, setTouch}) => {
  return <>
    <TextInput
      testID={"name"}
      label={labelName}
      value={name}
      onChangeText={setName}
      style={styles.input}
      onBlur={() => setTouch(true)}
      error={!isValidName(name) && touchName}
    />
    {!isValidName(name) && touchName && (
      <HelperText type="error" visible={true}>
        Invalid First Name
      </HelperText>
    )}
  </>
}

export default Name;
