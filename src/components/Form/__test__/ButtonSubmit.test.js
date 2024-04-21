import { render } from '@testing-library/react';
import ButtonSubmit from '../ButtonSubmit';

test('show correctly button submit', () => {
  const { getByText } = render(
    <ButtonSubmit disabled={true}>Submit</ButtonSubmit>
  );
  expect(getByText("Submit")).toBeTruthy();
  expect(getByText("Submit")).toBeDisabled();
});