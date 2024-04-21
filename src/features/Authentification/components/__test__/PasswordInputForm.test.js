import { waitFor } from "@testing-library/react";
import PasswordInput from "../PasswordInput";
import renderWithReactHookForm from "../../../../utils/test-utils/renderWithReactHookForm";

test('show correctly password input', () => {
  const { getByLabelText, getByTestId, queryByText } = renderWithReactHookForm(
    <PasswordInput {...{
      name: "password", label: "password", id: "idPassword", testid: 'passwordTest',
      contraints: {
        required: "password is required"
      }
    }} />
  );
  expect(getByLabelText("password")).toBeTruthy();
  expect(getByLabelText("password").type).toBe('password');
  expect(getByLabelText("password").name).toBe('password');
  expect(getByLabelText("password").id).toBe('idPassword');
  expect(getByTestId("eye-test")).toBeTruthy();
  expect(getByTestId("eye-test")).not.toHaveClass('bi-eye');
  expect(queryByText("password is required")).not.toBeInTheDocument();
});

test('toggle correctly eye-icon when eye is clicked', async () => {
  const { user, getByTestId, getByLabelText } = renderWithReactHookForm(
    <PasswordInput {...{
      name: "password", label: "password", id: "idPassword", testid: 'passwordTest',
      contraints: {
        required: "password is required"
      }
    }} />
  );
  const eyeEle = getByTestId("eye-test");
  expect(eyeEle).not.toHaveClass('bi-eye');
  expect(getByLabelText("password").type).toBe('password');
  const eyeSpan = eyeEle.closest('span');
  await user.click(eyeSpan);
  expect(eyeEle).toHaveClass('bi-eye');
  expect(getByLabelText("password").type).toBe('text');
});

test('show correctly error message', async () => {
  const { getByText, reactHookFormMethods } = renderWithReactHookForm(
    <PasswordInput {...{
      name: "password", label: "password", id: "idPassword", testid: 'passwordTest',
      contraints: {
        required: "password is required"
      }
    }} />,
    { toPassBack: ["setError", "formState", "trigger"] }
  );

  await waitFor(() => {
    reactHookFormMethods.trigger('password');
    const { errors } = reactHookFormMethods.formState;
    expect(getByText("password is required")).toBeInTheDocument();
  });

  await waitFor(() => {
    reactHookFormMethods.setError('password', {
      message: "Invalid password"
    });
    expect(getByText("Invalid password")).toBeInTheDocument();
  });
});