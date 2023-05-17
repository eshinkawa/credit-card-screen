import React from 'react';
import ExpirationDate from './ExpirationDate';
import { fireEvent, render } from '@testing-library/react-native';

test('ExpirationDate component renders correctly', () => {
  const setExpirationDate = jest.fn();
  const setExpirationDateTouch = jest.fn();
  const { getByTestId } = render(
    <ExpirationDate
      expirationDate="12/22"
      setExpirationDate={setExpirationDate}
      expirationDateTouch={false}
      setExpirationDateTouch={setExpirationDateTouch}
    />
  );
  const input = getByTestId('expiration-date');
  expect(input).toBeTruthy();
  fireEvent(input, 'blur');
  fireEvent.changeText(input, '12/22');
  expect(setExpirationDate).toHaveBeenCalledWith('12/22');
  expect(input.props.value).toBe('12/22');
  expect(setExpirationDateTouch).toHaveBeenCalledWith(true);
});
