import React from 'react';
import CardNumber from './CardNumber';
import { fireEvent, render } from '@testing-library/react-native';
import { styles } from '../../styles/styles';

describe('CardNumber', () => {
  const setCardNumber = jest.fn();
  const setCardNumberTouch = jest.fn();
  const cardNumber = '1234567890123456';
  const cardNumberTouch = true;

  const props = { setCardNumber, setCardNumberTouch, cardNumber, cardNumberTouch};

  test('renders correctly', () => {
    const {  getAllByText, getByTestId } = render(
      <CardNumber {...props}/>
    );

    const input = getByTestId('card-number');
    expect(input.props.value).toBe(cardNumber);
    expect(input.props.maxLength).toBe(19);
    expect(input.props.keyboardType).toBe('numeric');
  })

  test('show error message', () => {
    const {  getAllByText, getByTestId } = render(
      <CardNumber {...props}/>
    );

    const input = getByTestId('card-number');
    fireEvent.changeText(input, '1234567890123456');
    fireEvent(input, 'blur');

    expect(getAllByText('Invalid Card Number')).toBeTruthy();
  });

  test('dont show error message for Amex Card', () => {
    const newProps = { ...props, cardNumberTouch: false}
    const {  debug, getByText, getByTestId } = render(
      <CardNumber {...newProps}/>
    );

    const input = getByTestId('card-number');

    fireEvent(input, 'blur');
    fireEvent.changeText(input, '340205640682146');

    expect(cardNumberTouch).toBeTruthy();
  })

})
