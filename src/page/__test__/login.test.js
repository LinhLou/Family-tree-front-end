import renderWithRouterAndRedux from '../../utils/test-utils/renderWithRouterAndRedux';
import Login from "../login";

test('show correctly login page', () => {
  const { getByLabelText, getByText } = renderWithRouterAndRedux(<Login />);

  expect(getByLabelText('username')).toBeInTheDocument();
  expect(getByLabelText('password')).toBeInTheDocument();
  expect(getByText("Forget password?")).toBeInTheDocument();
  expect(getByText("Forget password?").closest('a').href).toContain('/verify-email');
  expect(getByText("You don't have account yet?")).toBeInTheDocument();
  expect(getByText("Create account")).toBeInTheDocument();
  expect(getByText("Create account").closest('a').href).toContain('/signup');
});
