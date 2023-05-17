import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import ZipCode from './ZipCode';

test('ZipCode component renders correctly', () => {
  const setZipCode = jest.fn();
  const setZipCodeTouch = jest.fn();
  const { getByTestId, getByText } = render(
    <ZipCode zipCode="" setZipCode={setZipCode} zipCodeTouch={false} setZipCodeTouch={setZipCodeTouch} />
  );
  const input = getByTestId('zipcode');
  expect(input).toBeTruthy();
  fireEvent.changeText(input, '12345');
  expect(setZipCode).toHaveBeenCalledWith('12345');
  fireEvent(input, 'blur');
  expect(setZipCodeTouch).toHaveBeenCalledWith(true);
});
