import renderWithRouterAndRedux from '../../../../utils/test-utils/renderWithRouterAndRedux';
import apiUserMockedFailed from '../../../../services/api/__mocks__/apiUserMockedFailed';
import apiUser from '../../../../services/api/apiUser';
import LoginForm from '../LoginForm';


test('show correctly all input in the Login Form', () => {
  const { getByLabelText, queryByText, getByText } = renderWithRouterAndRedux(<LoginForm />);
  expect(getByLabelText("password")).toBeInTheDocument();
  expect(getByLabelText("username")).toBeInTheDocument();
  expect(getByText('Log in')).toBeInTheDocument();
  expect(getByText('Forget password?').closest('a').href).toContain("/verify-email");
  expect(queryByText("username is required")).not.toBeInTheDocument();
  expect(queryByText("password is required")).not.toBeInTheDocument();
});


test('show message error when form submitted', async () => {

  apiUser.loginUser = jest.fn().mockImplementationOnce(apiUserMockedFailed.loginUser);
  
  const { user, queryByText, getByText, getByLabelText } = renderWithRouterAndRedux(<LoginForm />);
  const btnSubmit = getByText('Log in');
  const usernameInput = getByLabelText("username");
  const passwordInput = getByLabelText("password");

  await user.click(btnSubmit);
  expect(queryByText("username is required")).toBeInTheDocument();
  expect(queryByText("password is required")).toBeInTheDocument();

  await user.type(usernameInput, "username");
  await user.type(passwordInput, "12345");
  await user.click(btnSubmit);
  expect(queryByText("username is required")).not.toBeInTheDocument();
  expect(queryByText("password is incorrect")).toBeInTheDocument();

});


