import { fireEvent, render } from '@testing-library/react-native';
import Name from './Name';

test('Name component renders correctly', () => {
  const labelName = 'name';
  const name = 'John';
  const setName = jest.fn();
  const touchName = true;
  const setTouch = jest.fn();

  const {getAllByText, getByTestId} = render(<Name labelName={labelName} name={name} setName={setName} touchName={touchName} setTouch={setTouch} />);

  const inputElement = getByTestId(labelName);
  expect(inputElement).toBeTruthy();
  expect(inputElement.props.value).toBe(name);

  fireEvent.changeText(inputElement, { target: { value: 'Jo' } });
  expect(setName).toHaveBeenCalledWith({"target": {"value": "Jo"}});

  fireEvent(inputElement, 'blur');
  expect(setTouch).toHaveBeenCalledWith(true);


  fireEvent.changeText(inputElement, { target: { value: 'J' } });
  expect(setName).toHaveBeenCalledWith({"target": {"value": "Jo"}});

});
