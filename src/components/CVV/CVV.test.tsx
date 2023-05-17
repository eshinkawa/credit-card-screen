import { fireEvent, render } from '@testing-library/react-native';
import CVV from './CVV';


describe('CVV component renders correctly', () => {
  const setCvv = jest.fn();
  const setCvvTouch = jest.fn();
  const cvv = '123';
  const cardNumber = '1234567890123456';
  const cvvTouch = false;

  const props = {setCvv, setCvvTouch, cvv, cardNumber, cvvTouch}
  test('CVV component renders correctly', () => {
    const {getByTestId, getAllByText} = render(
      <CVV {...props}/>
    );

    const cvvInput = getByTestId('cvv');
    expect(cvvInput).toBeTruthy();
    expect(cvvInput.props.value).toBe(cvv);

    fireEvent.changeText(cvvInput, {target: {value: '1234'}});
    expect(setCvv).toHaveBeenCalledWith({"target": {"value": "1234"}});
  })
})
