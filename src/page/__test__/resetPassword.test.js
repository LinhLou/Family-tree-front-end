import renderWithRouterAndRedux from "../../utils/test-utils/renderWithRouterAndRedux";
import ResetPassword from '../resetPassword';

test('show correctly reset password page', () => {
  const { getByLabelText, getByText } = renderWithRouterAndRedux(<ResetPassword />);

  expect(getByLabelText("password")).toBeInTheDocument();
  expect(getByLabelText("repeat password")).toBeInTheDocument();
  expect(getByText("Send")).toBeInTheDocument();
  expect(getByText("Reset your password")).toBeInTheDocument();
});
