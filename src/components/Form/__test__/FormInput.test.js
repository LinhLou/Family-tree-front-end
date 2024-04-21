import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import FormInput from "../FormInput";
import renderWithReactHookForm from "../../../utils/test-utils/renderWithReactHookForm";


test('should watch input correctly', () => {
  const { getByLabelText, queryByText } = renderWithReactHookForm(
    <FormInput {...{ type: 'email', id: 'idEmail', label: 'email', name: 'email' }} />
  );
  expect(getByLabelText('email')).toBeTruthy();
  expect(getByLabelText('email').type).toBe('email');
  expect(getByLabelText('email').id).toBe('idEmail');
  expect(getByLabelText('email').name).toBe('email');
  expect(queryByText('email is required')).not.toBeInTheDocument();
});



test('should show correct error message in function of invalidation case', async () => {
  const user = userEvent.setup()
  const { getByLabelText, getByText, reactHookFormMethods } = renderWithReactHookForm(
    <FormInput {...{
      type: 'email', id: 'idEmail', label: 'email', name: 'email',
      contraints: {
        required: "email is required",
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Invalid email'
        }
      }
    }} />,
    { toPassBack: ["setError", "formState", "trigger"] }
  );

  await waitFor(() => {
    reactHookFormMethods.trigger('email');
    const { errors } = reactHookFormMethods.formState;
    expect(getByText("email is required")).toBeInTheDocument();
  });

  await waitFor(()=>{
    user.type(getByLabelText("email"),'example');
    reactHookFormMethods.trigger('email');
    const { errors } = reactHookFormMethods.formState;
    expect(getByText("Invalid email")).toBeInTheDocument();
  })

  await waitFor(() => {
    reactHookFormMethods.setError("email", {
      message: "email is incorrect",
    });
    expect(getByText("email is incorrect")).toBeInTheDocument();
  });
});